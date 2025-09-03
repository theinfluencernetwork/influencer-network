import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    console.log('[Brands API] Incoming request')
    const body = await request.json()
    console.log('[Brands API] Parsed body:', body)
    console.log('[Brands API] Prisma client ready, testing connection with a lightweight query...')
    try {
      // This is a no-op on MongoDB but will initialize the engine
      await prisma.$runCommandRaw({ ping: 1 })
      console.log('[Brands API] MongoDB ping ok')
    } catch (connErr) {
      console.error('[Brands API] MongoDB ping failed:', connErr)
    }

    const {
      brandName,
      contactName,
      contactEmail,
      contactPhone,
      campaignTitle,
      description,
      objectives = [],
      budgetMin,
      budgetMax,
      startDate,
      endDate,
      targetCities = [],
      deliverables = [],
      platforms = [],
      links,
    } = body || {}

    if (!brandName || !contactName || !contactEmail || !campaignTitle || !description) {
      console.warn('[Brands API] Missing required fields')
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    console.log('[Brands API] Creating BrandCampaignSubmission via Prisma...')
    const created = await prisma.brandCampaignSubmission.create({
      data: {
        brandName,
        contactName,
        contactEmail,
        contactPhone,
        campaignTitle,
        description,
        objectives,
        budgetMin: budgetMin ?? null,
        budgetMax: budgetMax ?? null,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        targetCities,
        deliverables,
        platforms,
        links: links ?? undefined,
      },
    })

    console.log('[Brands API] Created submission with id:', created.id)
    return new Response(JSON.stringify({ id: created.id }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('[Brands API] Brand POST error:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}


