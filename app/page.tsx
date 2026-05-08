"use client";

import { useState } from "react";

export default function Home() {

  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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

            <button className="bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition">
              Generate Audit
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}