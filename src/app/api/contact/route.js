import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.phone || !body.email) {
      return new Response(
        JSON.stringify({ error: "Phone and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const contact = await prisma.ContactUsSubmission.create({
      data: {
        formType: body.formType || (body.brandName ? "brand" : "creator"),
        brandName: body.brandName || null,
        company: body.company || null,
        website: body.website || null,
        message: body.message || null,
        fullName: body.fullName || null,
        socialLink: body.socialLink || null,
        phone: body.phone,
        email: body.email,
      },
    });

    return new Response(JSON.stringify({ success: true, data: contact }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ POST /api/contact error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to submit contact form" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  try {
    const contacts = await prisma.ContactUsSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });

    return new Response(JSON.stringify({ success: true, data: contacts }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ GET /api/contact error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch contacts" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
