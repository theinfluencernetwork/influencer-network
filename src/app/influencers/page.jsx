"use client"

import { useState } from 'react'

export default function InfluencerFormPage() {
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setMessage(null)
    const form = event.currentTarget

    const data = {
      fullName: form.fullName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim() || undefined,
      city: form.city.value.trim() || undefined,
      niches: form.niches.value ? form.niches.value.split(',').map(s => s.trim()).filter(Boolean) : [],
      platforms: Array.from(form.querySelectorAll('input[name="platforms"]:checked')).map(i => i.value),
      audienceSize: form.audienceSize.value ? Number(form.audienceSize.value) : undefined,
      bio: form.bio.value.trim() || undefined,
      portfolioUrl: form.portfolioUrl.value.trim() || undefined,
      ratesNote: form.ratesNote.value.trim() || undefined,
      consent: form.consent.checked,
      socialLinks: {
        instagram: form.instagram.value.trim() || undefined,
        youtube: form.youtube.value.trim() || undefined,
        tiktok: form.tiktok.value.trim() || undefined,
      },
    }

    try {
      const res = await fetch('/api/influencers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Submission failed')
      setMessage('Thanks! We received your application.')
      form.reset()
    } catch (e) {
      setMessage(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Join as Influencer</h1>
      {message && <p className="mb-4 text-sm">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="fullName" placeholder="Full name*" required className="border p-2 rounded" />
          <input name="email" placeholder="Email*" type="email" required className="border p-2 rounded" />
          <input name="phone" placeholder="Phone" className="border p-2 rounded" />
          <input name="city" placeholder="City" className="border p-2 rounded" />
        </div>
        <input name="niches" placeholder="Niches (comma separated)" className="border p-2 rounded w-full" />

        <div>
          <p className="mb-2">Platforms</p>
          <div className="flex flex-wrap gap-4">
            {['Instagram', 'YouTube', 'TikTok', 'X', 'Facebook'].map(p => (
              <label key={p} className="inline-flex items-center gap-2">
                <input type="checkbox" name="platforms" value={p.toLowerCase()} />
                <span>{p}</span>
              </label>
            ))}
          </div>
        </div>

        <input name="audienceSize" type="number" min="0" placeholder="Audience size" className="border p-2 rounded w-full" />
        <textarea name="bio" placeholder="Short bio" className="border p-2 rounded w-full" />
        <input name="portfolioUrl" placeholder="Portfolio/Media kit URL" className="border p-2 rounded w-full" />
        <input name="instagram" placeholder="Instagram URL" className="border p-2 rounded w-full" />
        <input name="youtube" placeholder="YouTube URL" className="border p-2 rounded w-full" />
        <input name="tiktok" placeholder="TikTok URL" className="border p-2 rounded w-full" />
        <input name="ratesNote" placeholder="Rates / collaboration notes" className="border p-2 rounded w-full" />

        <label className="inline-flex items-center gap-2">
          <input name="consent" type="checkbox" defaultChecked />
          <span>I agree to be contacted</span>
        </label>

        <button disabled={submitting} className="bg-black text-white px-4 py-2 rounded">
          {submitting ? 'Submitting…' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
 
