"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: ""
  });

  const [auditResult, setAuditResult] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("auditForm");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("auditForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateAudit = () => {

    let recommendation = "";
    let savings = 0;

    const spend = Number(formData.spend);
    const seats = Number(formData.seats);

    if (formData.tool === "ChatGPT") {

      if (seats <= 2) {
        recommendation = "Switch to ChatGPT Plus";
        savings = Math.max(spend - 20, 0);
      } else {
        recommendation = "Consider ChatGPT Team for collaboration";
        savings = Math.max(spend - 30, 0);
      }

    }

    else if (formData.tool === "Cursor") {

      if (seats <= 3) {
        recommendation = "Downgrade to Cursor Pro";
        savings = Math.max(spend - 20, 0);
      } else {
        recommendation = "Cursor pricing seems reasonable";
        savings = Math.max(spend - 40, 0);
      }

    }

    else if (formData.tool === "Claude") {

      recommendation = "Consider Claude Pro for lower operational cost";
      savings = Math.max(spend - 30, 0);

    }

    else if (formData.tool === "GitHub Copilot") {

      recommendation = "GitHub Copilot Individual may reduce costs";
      savings = Math.max(spend - 10, 0);

    }

    else if (formData.tool === "Gemini") {

      recommendation = "Gemini Pro may provide better pricing efficiency";
      savings = Math.max(spend - 15, 0);

    }

    else {

      recommendation = "No optimization suggestion available";

    }

    setAuditResult({
  recommendation,
  savings,
  annualSavings: savings * 12,
  summary: `Your current ${formData.tool} setup shows optimization opportunities. Based on your monthly spend and seat count, switching plans could reduce operational AI expenses while maintaining similar productivity and capabilities.`
});

  };

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            AI Spend Optimization
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Stop Overpaying
            <br />
            for AI Tools
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Audit your AI stack instantly and uncover hidden monthly savings.
          </p>

        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold mb-8">
            AI Spend Audit
          </h2>

          <div className="grid gap-6">

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                AI Tool
              </label>

              <select
                name="tool"
                value={formData.tool}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
              >
                <option value="">Select Tool</option>
                <option>ChatGPT</option>
                <option>Claude</option>
                <option>Cursor</option>
                <option>GitHub Copilot</option>
                <option>Gemini</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Current Plan
              </label>

              <input
                type="text"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                placeholder="e.g. Team Plan"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Monthly Spend ($)
              </label>

              <input
                type="number"
                name="spend"
                value={formData.spend}
                onChange={handleChange}
                placeholder="200"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Number of Seats
              </label>

              <input
                type="number"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                placeholder="5"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Team Size
              </label>

              <input
                type="number"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                placeholder="10"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Primary Use Case
              </label>

              <select
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
              >
                <option value="">Select Use Case</option>
                <option>Coding</option>
                <option>Writing</option>
                <option>Research</option>
                <option>Data Analysis</option>
                <option>Mixed</option>
              </select>
            </div>

            <button
              onClick={generateAudit}
              className="bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Generate Audit
            </button>

            {auditResult && (

              <div className="mt-8 bg-black border border-zinc-700 rounded-2xl p-8">

                <h3 className="text-3xl font-bold mb-6">
                  Audit Results
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

                    <p className="text-gray-400 text-sm mb-2">
                      Recommended Action
                    </p>

                    <h4 className="text-xl font-semibold">
                      {auditResult.recommendation}
                    </h4>

                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

                    <p className="text-gray-400 text-sm mb-2">
                      Estimated Monthly Savings
                    </p>

                    <h4 className="text-3xl font-bold text-green-400">
                      ${auditResult.savings}
                    </h4>

                  </div>

                </div>

                <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

                  <p className="text-gray-400 text-sm mb-2">
                    Estimated Annual Savings
                  </p>

                  <h4 className="text-4xl font-bold text-green-400">
                    ${auditResult.annualSavings}
                  </h4>

                </div>

                {auditResult.savings > 500 && (

                  <div className="mt-6 bg-green-500/10 border border-green-500 rounded-2xl p-6">

                    <h4 className="text-2xl font-bold text-green-400 mb-2">
                      High Savings Opportunity
                    </h4>

                    <p className="text-gray-300">
                      Your organization may significantly reduce AI infrastructure
                      costs through optimized plans and AI credits.
                    </p>

                  </div>
                  

                )}
                <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

  <p className="text-gray-400 text-sm mb-3">
    AI Generated Summary
  </p>

  <p className="text-gray-300 leading-7">
    {auditResult.summary}
  </p>

</div>

              </div>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}