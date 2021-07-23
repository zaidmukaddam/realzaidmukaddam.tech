import { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import nodeMailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2,
});

function middleWare(req: NextApiRequest, res: NextApiResponse, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void | NextApiResponse> {
  const { method } = req;
  const transporter = nodeMailer.createTransport({
    secure: true,
    service: "Gmail",
    logger: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  switch (method) {
    case "POST": {
      await middleWare(req, res, limiter);
      const body = JSON.parse(req.body);

      if (!body.name || !body.email || !body.text) {
        return res.json({
          error: "Please fill in all fields",
          status: "error",
          required_fields: ["name", "email", "text"],
        });
      }

      const mail: MailOptions = {
        from: body.email,
        to: process.env.EXTRA_EMAIL,
        subject: `New email from ${body.name}`,
        text: `
Email from: ${body.email}:

${body.text}`,
        cc: process.env.EXTRA_EMAIL,
      };

      try {
        await transporter.sendMail(mail);

        return res.json({ status: "success" });
      } catch (e) {
        console.log(e);
        return res.json({
          status: "error",
          error: "An unexpected error occurred. Please try again later.",
        });
      }
    }
    default: {
      return res.redirect("/404");
    }
  }
}
