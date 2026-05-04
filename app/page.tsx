export default function Home() {
  const faqs = [
    {
      q: 'How does the prediction engine work?',
      a: 'We analyze your historical invoice data, client payment patterns, invoice terms, and seasonal trends to generate a predicted payment date with a confidence interval — so you know the likely range, not just a single guess.'
    },
    {
      q: 'Which accounting tools do you integrate with?',
      a: 'Invoice Predictor connects with QuickBooks, FreshBooks, Wave, and Xero via OAuth. You can also upload CSV exports or enter invoices manually.'
    },
    {
      q: 'What happens after I subscribe?',
      a: 'You get instant access to your dashboard. Connect your accounting software or upload past invoices and the model starts predicting within minutes. Cancel anytime — no contracts.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Freelancer Fintech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict when clients will{' '}
          <span className="text-[#58a6ff]">actually pay</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing your cash flow. Invoice Predictor uses ML to analyze client payment patterns and give you confidence-scored payment date predictions — so you can plan with certainty.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start predicting — $29/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No contracts. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: '87%', label: 'Prediction accuracy within 3 days' },
            { stat: '2 min', label: 'Setup with your accounting tool' },
            { stat: '$0', label: 'Surprise cash gaps after month one' }
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-3xl font-bold text-[#58a6ff] mb-1">{stat}</div>
              <div className="text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to predict and plan cash flow.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited invoice predictions',
              'Confidence interval scoring',
              'QuickBooks, Xero, FreshBooks sync',
              'Cash flow calendar & alerts',
              'Client payment history analytics',
              'CSV import & manual entry'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Invoice Predictor. Built for freelancers who value their time.
      </footer>
    </main>
  )
}
