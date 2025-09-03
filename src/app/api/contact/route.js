import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    console.log('[Contacts API] Incoming request')
    const body = await request.json()
    console.log('[Contacts API] Parsed body:', body)
    console.log('[Contacts API] Prisma client ready, testing connection with a lightweight query...')
    try {
      // This is a no-op on MongoDB but will initialize the engine
      await prisma.$runCommandRaw({ ping: 1 })
      console.log('[Contacts API] MongoDB ping ok')
    } catch (connErr) {
      console.error('[Contacts API] MongoDB ping failed:', connErr)
    }

    const {
        name      ,
        email    ,
        phone   ,
        company ,
        message  ,
    } = body || {}

    if (!name || !phone || !email || !company || !message) {
      console.warn('[Contacts API] Missing required fields')
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    console.log('[Contacts API] Creating ContactusSubmission via Prisma...')
    const created = await prisma.ContactusSubmission.create({
      data: {
        name    ,
        email    ,
        phone   ,
        company ,
        message  ,
      },
    })

    console.log('[Contacts API] Created submission with id:', created.id)
    return new Response(JSON.stringify({ id: created.id }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('[Contacts API] Brand POST error:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}


