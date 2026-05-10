"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {

  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: ""
  });

  const [tools, setTools] = useState([]);
  const [auditResult, setAuditResult] = useState(null);
  const [shareId, setShareId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedTools = localStorage.getItem("auditTools");

    if (savedTools) {
      setTools(JSON.parse(savedTools));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("auditTools", JSON.stringify(tools));
  }, [tools]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addTool = () => {

    if (!formData.tool || !formData.spend) {
      alert("Please fill Tool and Spend fields");
      return;
    }

    const newTool = {
      ...formData,
      seats: formData.seats || 1
    };

    setTools((prevTools) => [...prevTools, newTool]);

    setFormData({
      tool: "",
      plan: "",
      spend: "",
      seats: "",
      teamSize: "",
      useCase: ""
    });

  };

  const generateAudit = () => {

    let totalSavings = 0;
    let recommendations = [];

    tools.forEach((tool) => {

      const spend = Number(tool.spend);
      const seats = Number(tool.seats);

      let recommendation = "";
      let savings = 0;

      if (tool.tool === "ChatGPT") {

        if (seats <= 2) {
          recommendation = "Switch to ChatGPT Plus";
          savings = Math.max(spend - 20, 0);
        } else {
          recommendation = "Consider ChatGPT Team";
          savings = Math.max(spend - 30, 0);
        }

      }

      else if (tool.tool === "Cursor") {

        if (seats <= 3) {
          recommendation = "Downgrade to Cursor Pro";
          savings = Math.max(spend - 20, 0);
        } else {
          recommendation = "Cursor pricing seems optimized";
          savings = Math.max(spend - 40, 0);
        }

      }

      else if (tool.tool === "Claude") {

        recommendation = "Consider Claude Pro";
        savings = Math.max(spend - 30, 0);

      }

      else if (tool.tool === "GitHub Copilot") {

        recommendation = "Use Copilot Individual";
        savings = Math.max(spend - 10, 0);

      }

      else if (tool.tool === "Gemini") {

        recommendation = "Gemini Pro may reduce costs";
        savings = Math.max(spend - 15, 0);

      }

      else {

        recommendation = "No optimization suggestion available";

      }

      totalSavings += savings;

      recommendations.push({
        tool: tool.tool,
        recommendation,
        savings
      });

    });

    setAuditResult({
      recommendations,
      monthlySavings: totalSavings,
      annualSavings: totalSavings * 12,
      summary:
        "Your AI stack contains optimization opportunities across multiple tools. Consolidating plans and selecting more cost-efficient tiers may significantly reduce monthly operational AI expenses."
    });

  };
const saveAudit = async () => {

  try {

    setLoading(true);

    const docRef = await addDoc(collection(db, "audits"), {
      tools,
      auditResult,
      createdAt: new Date()
    });

    setShareId(docRef.id);

    alert("Audit saved successfully!");

  } catch (error) {

    console.log(error);

    alert("Failed to save audit");

  } finally {

    setLoading(false);

  }

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
              type="button"
              onClick={addTool}
              className="bg-zinc-700 text-white py-4 rounded-xl font-semibold hover:bg-zinc-600 transition"
            >
              Add Tool
            </button>

            {tools.length > 0 && (

              <div className="bg-black border border-zinc-700 rounded-2xl p-6">

                <h3 className="text-xl font-semibold mb-4">
                  Added Tools
                </h3>

                <div className="space-y-3">

                  {tools.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center justify-between bg-zinc-900 rounded-xl p-4"
                    >

                      <div>
                        <p className="font-semibold">
                          {item.tool}
                        </p>

                        <p className="text-sm text-gray-400">
                          ${item.spend}/month • {item.seats} seats
                        </p>
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            )}

            <button
              type="button"
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

                <div className="space-y-4">

                  {auditResult.recommendations.map((item, index) => (

                    <div
                      key={index}
                      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                    >

                      <h4 className="text-xl font-semibold mb-2">
                        {item.tool}
                      </h4>

                      <p className="text-gray-300 mb-3">
                        {item.recommendation}
                      </p>

                      <p className="text-green-400 font-semibold">
                        Savings: ${item.savings}/month
                      </p>

                    </div>

                  ))}

                </div>

                <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

                  <p className="text-gray-400 text-sm mb-2">
                    Total Monthly Savings
                  </p>

                  <h4 className="text-4xl font-bold text-green-400">
                    ${auditResult.monthlySavings}
                  </h4>

                </div>

                <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

                  <p className="text-gray-400 text-sm mb-2">
                    Total Annual Savings
                  </p>

                  <h4 className="text-4xl font-bold text-green-400">
                    ${auditResult.annualSavings}
                  </h4>

                </div>

                <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

                  <p className="text-gray-400 text-sm mb-3">
                    AI Generated Summary
                  </p>

                  <p className="text-gray-300 leading-7">
                    {auditResult.summary}
                  </p>

                </div>

               <button
  
  onClick={saveAudit}
  disabled={loading}
  className="mt-6 w-full bg-green-500 text-black py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
>
  {loading ? "Saving..." : "Save Audit Report"}
</button>
  className="mt-6 w-full bg-green-500 text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
>
  Save Audit Report
</button>

                {shareId && (

  <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

    <p className="text-gray-400 text-sm mb-2">
      Shareable Audit Link
    </p>

    <div className="flex flex-col md:flex-row gap-4">

      <input
        type="text"
        readOnly
        value={`https://ai-spend-audit-omega.vercel.app/audit/${shareId}`}
        className="flex-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-green-400"
      />

      <button
        onClick={() => {
          navigator.clipboard.writeText(
            `https://ai-spend-audit-omega.vercel.app/audit/${shareId}`
          );

          alert("Link copied!");
        }}
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
      >
        Copy Link
      </button>

    </div>

  </div>

)}

              </div>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}