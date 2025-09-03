"use client"

import { useState } from 'react'

export default function BrandCampaignFormPage() {
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setMessage(null)
    const form = event.currentTarget

    const data = {
      brandName: form.brandName.value.trim(),
      contactName: form.contactName.value.trim(),
      contactEmail: form.contactEmail.value.trim(),
      contactPhone: form.contactPhone.value.trim() || undefined,
      campaignTitle: form.campaignTitle.value.trim(),
      description: form.description.value.trim(),
      objectives: form.objectives.value ? form.objectives.value.split(',').map(s => s.trim()).filter(Boolean) : [],
      budgetMin: form.budgetMin.value ? Number(form.budgetMin.value) : undefined,
      budgetMax: form.budgetMax.value ? Number(form.budgetMax.value) : undefined,
      startDate: form.startDate.value || undefined,
      endDate: form.endDate.value || undefined,
      targetCities: form.targetCities.value ? form.targetCities.value.split(',').map(s => s.trim()).filter(Boolean) : [],
      deliverables: form.deliverables.value ? form.deliverables.value.split(',').map(s => s.trim()).filter(Boolean) : [],
      platforms: Array.from(form.querySelectorAll('input[name="platforms"]:checked')).map(i => i.value),
      links: {
        brief: form.brief.value.trim() || undefined,
        website: form.website.value.trim() || undefined,
      },
    }

    try {
      const res = await fetch('/api/brands', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Submission failed')
      setMessage('Thanks! Your campaign request has been submitted.')
      form.reset()
    } catch (e) {
      setMessage(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Submit a Brand Campaign</h1>
      {message && <p className="mb-4 text-sm">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="brandName" placeholder="Brand name*" required className="border p-2 rounded" />
          <input name="campaignTitle" placeholder="Campaign title*" required className="border p-2 rounded" />
          <input name="contactName" placeholder="Contact name*" required className="border p-2 rounded" />
          <input name="contactEmail" placeholder="Contact email*" type="email" required className="border p-2 rounded" />
          <input name="contactPhone" placeholder="Contact phone" className="border p-2 rounded" />
        </div>

        <textarea name="description" placeholder="Campaign description*" required className="border p-2 rounded w-full" />
        <input name="objectives" placeholder="Objectives (comma separated)" className="border p-2 rounded w-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="budgetMin" type="number" min="0" placeholder="Budget min" className="border p-2 rounded" />
          <input name="budgetMax" type="number" min="0" placeholder="Budget max" className="border p-2 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="startDate" type="date" className="border p-2 rounded" />
          <input name="endDate" type="date" className="border p-2 rounded" />
        </div>

        <input name="targetCities" placeholder="Target cities (comma separated)" className="border p-2 rounded w-full" />
        <input name="deliverables" placeholder="Deliverables (comma separated)" className="border p-2 rounded w-full" />

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

        <input name="website" placeholder="Brand website" className="border p-2 rounded w-full" />
        <input name="brief" placeholder="Brief/Deck link" className="border p-2 rounded w-full" />

        <button disabled={submitting} className="bg-black text-white px-4 py-2 rounded">
          {submitting ? 'Submitting…' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

// import BrandCard from "@/components/BrandCard";

// export const metadata = { title: "Brands | The Influencer Network" };

// export default function BrandsPage() {
//   return (
//     <div className="mx-auto max-w-6xl px-4 py-16">
//       <h1 className="text-3xl sm:text-4xl font-bold relative inline-block group cursor-pointer text-center">
//         Trusted By <span className="text-red-600">Brands</span>
//         <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-black to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
//       </h1>

//       <div className="mt-8">
//         <BrandCard />
//       </div>
//     </div>
//   );
// }
