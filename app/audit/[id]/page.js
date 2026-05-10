"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

export default function AuditPage() {

  const params = useParams();

  const [auditData, setAuditData] = useState(null);

  useEffect(() => {

    const fetchAudit = async () => {

      try {

        if (!params?.id) return;

        const docRef = doc(db, "audits", params.id);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAuditData(docSnap.data());
        }

      } catch (error) {

        console.log(error);

      }

    };

    fetchAudit();

  }, [params]);

  if (!auditData) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Loading Audit...
        </h1>
      </main>
    );

  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Shared Audit Report
        </h1>

        <div className="space-y-6">

          {auditData.auditResult.recommendations.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >

              <h2 className="text-2xl font-semibold mb-3">
                {item.tool}
              </h2>

              <p className="text-gray-300 mb-3">
                {item.recommendation}
              </p>

              <p className="text-green-400 font-semibold">
                Savings: ${item.savings}/month
              </p>

            </div>

          ))}

        </div>

        <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <p className="text-gray-400 text-sm mb-2">
            Total Monthly Savings
          </p>

          <h2 className="text-4xl font-bold text-green-400">
            ${auditData.auditResult.monthlySavings}
          </h2>

        </div>

        <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <p className="text-gray-400 text-sm mb-2">
            Total Annual Savings
          </p>

          <h2 className="text-4xl font-bold text-green-400">
            ${auditData.auditResult.annualSavings}
          </h2>

        </div>

      </div>

    </main>
  );
}