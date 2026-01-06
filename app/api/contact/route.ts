import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidPhone(phone: string) {
  // prosta walidacja: cyfry, spacje, +, myślniki
  return /^[+\d\s-]{6,20}$/.test(phone.trim());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !phone || !message) {
      return Response.json(
        { ok: false, error: "Uzupełnij wszystkie pola." },
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return Response.json(
        { ok: false, error: "Nieprawidłowy numer telefonu." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from || !process.env.RESEND_API_KEY) {
      return Response.json(
        { ok: false, error: "Brak konfiguracji serwera (ENV)." },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: from,
      to: [to],
      subject: `Nowe zapytanie — ${name}`,
      text:
        `Nowe zapytanie z formularza Perfect Automotive\n\n` +
        `Imię: ${name}\n` +
        `Telefon: ${phone}\n\n` +
        `Wiadomość:\n${message}\n`,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Błąd serwera. Spróbuj ponownie." },
      { status: 500 },
    );
  }
}
