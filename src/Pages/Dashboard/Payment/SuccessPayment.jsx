import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import useAxios from "../../../hooks/useAxios";
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle,
  Copy,
  Download,
  Home,
  LayoutDashboard,
} from "lucide-react";

const SuccessPayment = () => {
  const [copied, setCopied] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const Axios = useAxios();
  useEffect(() => {
    Axios(`/session-status?session_id=${sessionId}`).then((res) =>
      setPaymentInfo(res.data)
    );
  }, [sessionId]);
  const handleCopy = () => {
    navigator.clipboard.writeText("xyz");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div>
      <div className="min-h-screen  flex items-center justify-center p-4 font-sans">
        {/* Main Card */}
        <div
          className={`card bg-base-100 w-full max-w-md shadow-xl transition-all duration-700 transform  'translate-y-0 opacity-100'`}
        >
          <div className="card-body p-0">
            <div className="bg-success/10 p-8 rounded-t-2xl flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-success rounded-full blur-3xl"></div>
                <div className="absolute top-10 -right-10 w-24 h-24 bg-success rounded-full blur-2xl"></div>
              </div>

              {/* Icon Animation */}
              <div className="relative z-10 mb-4">
                <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center shadow-lg shadow-success/40 animate-bounce-slow">
                  <CheckCircle
                    className="w-10 h-10 text-white"
                    strokeWidth={3}
                  />
                </div>
              </div>

              <h2 className="card-title text-2xl font-bold text-base-content mb-1">
                Payment Successful!
              </h2>
              <p className="text-base-content/70">
                Your transfer has been processed.
              </p>
            </div>

            {/* Amount Display */}
            <div className="px-8 pt-6 text-center">
              <p className="text-sm font-medium text-base-content/60 uppercase tracking-wide">
                Total Amount
              </p>
              <h1 className="text-4xl font-extrabold text-orange-500 mt-2">
                {paymentInfo.amount} $
              </h1>
              <div className="badge  badge-success badge-outline mt-3 gap-1 font-medium">
                <div className="flex items-center">
                  <Check size={16} />
                  paid
                </div>
              </div>
            </div>

            {/* Transaction Details List */}
            <div className="px-8 py-6">
              <div className="bg-base-200/50 rounded-xl p-4 space-y-4">
                {/* Date */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 text-base-content/70">
                    <div className="w-8 h-8 rounded-lg bg-base-100 flex items-center justify-center shadow-sm">
                      <Calendar size={16} />
                    </div>
                    <span className="text-sm font-medium">Date</span>
                  </div>
                  <span className="text-sm font-semibold text-right text-base-content">
                     <span>
                      
                      {new Date(paymentInfo.date).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                      {
                        
                      }
                    </span>
                    <span>
                      {"  "}
                      {new Date(paymentInfo.date).toDateString("En-us")}
                    </span>
                   
                  </span>
                </div>

                <div className="divider my-1"></div>

                {/* Transaction ID */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-base-content/60 uppercase">
                    Transaction ID
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-sm font-mono bg-base-100 px-2 py-1 rounded border border-base-300 text-base-content/80 flex-1 truncate">
                     {
                        paymentInfo.transaction_ID
                     }
                    </code>
                    <button
                      className={`btn btn-square btn-sm btn-ghost transition-colors ${
                        copied ? "text-success" : "text-base-content/70"
                      }`}
                      onClick={handleCopy}
                      title="Copy ID"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-8 pt-0 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to={"/dashboard"}
                  className="btn btn-outline border-primary text-primay hover:bg-primary hover:text-white hover:border-primary"
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
                <Link
                  to={"/"}
                  className="btn btn-outline border-primary text-primay hover:bg-primary hover:text-white hover:border-primary"
                >
                  Go Home
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-3%); }
          50% { transform: translateY(3%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
      </div>
    </div>
  );
};

export default SuccessPayment;
