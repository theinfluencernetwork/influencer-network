import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    const body = await request.json()

    const {
      fullName,
      email,
      phone,
      city,
      niches = [],
      platforms = [],
      audienceSize,
      bio,
      portfolioUrl,
      ratesNote,
      socialLinks,
      consent = true,
    } = body || {}

    if (!fullName || !email) {
      return new Response(JSON.stringify({ error: 'fullName and email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const created = await prisma.influencerApplication.create({
      data: {
        fullName,
        email,
        phone,
        city,
        niches,
        platforms,
        audienceSize: audienceSize ?? null,
        bio,
        portfolioUrl,
        ratesNote,
        socialLinks: socialLinks ?? undefined,
        consent: consent !== false,
      },
    })

    return new Response(JSON.stringify({ id: created.id }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Influencer POST error', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}


