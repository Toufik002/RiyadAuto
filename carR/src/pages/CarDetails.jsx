import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { cars } from "../data/cars";
import { useI18n } from "../i18n/I18nProvider";

import {
  CalendarDays,
  Gauge,
  Navigation,
  ShieldCheck,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Image as ImageIcon,
} from "lucide-react";

function SmallBadge({ children, variant = "gray" }) {
  const cls =
    variant === "green"
      ? "bg-green-100 text-green-700"
      : variant === "blue"
        ? "bg-blue-100 text-blue-700"
        : "bg-gray-100 text-gray-700";
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cls}`}>
      {children}
    </span>
  );
}

function Stat(props) {
  const Icon = props.icon;
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Icon size={16} className="text-gray-400" />
      <span>{props.children}</span>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  );
}

function formatKey(k) {
  return k
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase());
}

export default function CarDetails() {
  const { t } = useI18n();

  const navigate = useNavigate();
  const { id } = useParams();

  const car = useMemo(() => cars.find((c) => c.id === id) || cars[0], [id]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Finance calculator state
  const [carPrice] = useState(car.price);
  const [downPayment, setDownPayment] = useState(Math.round(car.price * 0.2));
  const [interestRate, setInterestRate] = useState(2.79);
  const [loanPeriod, setLoanPeriod] = useState(5);

  const calculateMonthlyPayment = () => {
    const principal = carPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanPeriod * 12;

    if (numPayments <= 0) return 0;
    if (monthlyRate === 0) return Math.round(principal / numPayments);

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return Math.round(monthlyPayment);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalLoanAmount = carPrice - downPayment;
  const totalPayment = monthlyPayment * loanPeriod * 12;
  const totalInterest = totalPayment - totalLoanAmount;

  const thumbs = car.images?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-6 py-6">
        {/* Breadcrumb + back */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            ← Back To Search
          </button>
          <span className="text-gray-400">›</span>
          <span className="text-blue-600 hover:underline cursor-pointer">
            Dubai
          </span>
          <span className="text-gray-400">›</span>
          <span className="text-blue-600 hover:underline cursor-pointer">
            Motors
          </span>
          <span className="text-gray-400">›</span>
          <span>Used Cars</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">
            {car.brand} {car.model}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery: main + 2 right */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-2 p-2">
                <div className="relative rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={car.images?.[currentImageIndex]}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-[420px] object-cover"
                  />

                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2">
                    <ImageIcon size={16} />
                    <span>{currentImageIndex + 1}</span>
                    <span>/</span>
                    <span>{car.images?.length || 0}</span>
                  </div>
                </div>

                <div className="grid grid-rows-2 gap-2">
                  {thumbs.slice(1, 3).map((img, idx) => {
                    const realIndex = idx + 1;
                    const active = currentImageIndex === realIndex;

                    return (
                      <button
                        key={img}
                        onClick={() => setCurrentImageIndex(realIndex)}
                        className={
                          "relative rounded-xl overflow-hidden bg-gray-100 border-2 transition-colors " +
                          (active
                            ? "border-red-500"
                            : "border-transparent hover:border-red-500")
                        }
                        type="button"
                      >
                        <img
                          src={img}
                          alt="thumb"
                          className="w-full h-[206px] object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
                          {realIndex + 1}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Price + title + stats row */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-2xl font-extrabold text-gray-900">
                    AED {car.price.toLocaleString()}
                  </div>
                  <h1 className="text-xl font-bold text-gray-900 mt-1">
                    {car.brand} {car.model} {car.variant}
                  </h1>

                  <div className="flex flex-wrap items-center gap-5 mt-3">
                    <Stat icon={CalendarDays}>{car.year}</Stat>
                    <Stat icon={Gauge}>{car.mileage.toLocaleString()} km</Stat>
                    <Stat icon={Navigation}>{car.steering}</Stat>
                    <Stat icon={ShieldCheck}>{car.specs}</Stat>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <SmallBadge variant="green">Electric</SmallBadge>
                    <SmallBadge>Sound System</SmallBadge>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFavorite((v) => !v)}
                    className={
                      "h-9 px-3 rounded-md border flex items-center gap-2 text-sm " +
                      (isFavorite
                        ? "border-red-500 text-red-600"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50")
                    }
                    type="button"
                  >
                    <Heart size={16} />
                    Favorite
                  </button>
                  <button
                    className="h-9 px-3 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-2 text-sm"
                    type="button"
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Car Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                {Object.entries(car.overview || {}).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between py-3 border-b border-gray-100"
                  >
                    <span className="text-gray-600">{formatKey(k)}</span>
                    <span className="font-semibold text-gray-900">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {car.brand} {car.model} {car.variant}
              </h2>
              <p className="text-gray-700">{car.description}</p>
              <p className="text-sm text-gray-500 mt-3">
                Posted on: {car.postedDate}
              </p>
            </div>

            {/* Finance */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Car Finance Calculator
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left controls */}
                <div className="space-y-4">
                  {/* Car Price */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-gray-700">
                        Car Price
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        AED {carPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-2 bg-gray-900 w-full" />
                    </div>
                  </div>

                  {/* Down payment */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-gray-700">
                        Down Payment
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        AED {downPayment.toLocaleString()}{" "}
                        <span className="text-gray-500 font-semibold">
                          / {Math.round((downPayment / carPrice) * 100)}%
                        </span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={carPrice}
                      step="1000"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  {/* Interest rate */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-gray-700">
                        Interest Rate
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {interestRate.toFixed(2)}%
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  {/* Loan period */}
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">
                      Loan Period
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {[1, 2, 3, 4, 5].map((p) => {
                        const active = loanPeriod === p;
                        return (
                          <button
                            key={p}
                            onClick={() => setLoanPeriod(p)}
                            className={
                              "py-2 rounded-md text-sm font-bold border transition-all " +
                              (active
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50")
                            }
                            type="button"
                          >
                            {p}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right summary */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <div className="text-center mb-5">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Monthly Payment
                    </div>
                    <div className="text-3xl font-extrabold text-gray-900 mt-1">
                      AED {monthlyPayment.toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Row
                      label="Car Price"
                      value={`AED ${carPrice.toLocaleString()}`}
                    />
                    <Row
                      label="Down Payment"
                      value={`AED ${downPayment.toLocaleString()} / ${Math.round(
                        (downPayment / carPrice) * 100
                      )}%`}
                    />
                    <Row
                      label="Total Loan Amount"
                      value={`AED ${totalLoanAmount.toLocaleString()}`}
                    />
                    <Row label="Loan Period" value={`${loanPeriod} Years`} />
                    <Row
                      label="Total Interest"
                      value={`AED ${totalInterest.toLocaleString()}`}
                    />
                    <Row
                      label="Total Payment"
                      value={`AED ${totalPayment.toLocaleString()}`}
                    />
                  </div>

                  <button
                    className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-sm"
                    type="button"
                  >
                    Apply for Finance
                  </button>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Location</h2>
              <p className="text-gray-700 flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                {car.location}
              </p>

              <div className="mt-4 bg-gray-100 rounded-xl h-[240px] flex items-center justify-center text-gray-500">
                Map Placeholder (t9der tzid Google Maps / iframe)
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Seller card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center font-extrabold text-gray-700">
                    {car.seller?.[0]?.toUpperCase() || "A"}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-gray-900 truncate">
                        {car.seller}
                      </div>
                      <CheckCircle2 size={16} className="text-blue-600" />
                    </div>
                    <div className="text-sm text-gray-500">Dealer</div>
                    <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                      View All Cars
                    </div>
                  </div>
                </div>

                <button
                  className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                  type="button"
                >
                  <Phone size={18} />
                  Show Phone Number
                </button>

                <button
                  className="w-full mt-3 border border-gray-200 hover:bg-gray-50 text-gray-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                  type="button"
                >
                  <MessageCircle size={18} className="text-green-600" />
                  WhatsApp
                </button>
              </div>

              {/* Verified user promo */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-blue-200">
                  <CheckCircle2 size={18} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    Become a verified user
                  </div>
                  <div className="text-sm text-gray-600">
                    Verified buyers gain instant trust from sellers
                  </div>
                  <button
                    className="mt-3 bg-gray-900 hover:bg-black text-white font-bold px-4 py-2 rounded-lg text-sm"
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end grid */}
      </div>
    </div>
  );
}