export default function Newsletter() {
  return (
    <div className="rounded-3xl text-white">
      <form
        className="space-y-3"
        action="https://ngoexperts.us8.list-manage.com/subscribe/post?u=7ee1745a34e18e02f649b5fbb&id=28db5cdc82&f_id=00373ae0f0"
        method="post"
        target="_blank"
        noValidate
      >
        <input
          type="email"
          name="EMAIL"
          required
          placeholder="Your email address"
          className="w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-white/70"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-green-800 transition hover:bg-slate-100 active:scale-[0.98]"
        >
          Subscribe Now
        </button>

        <p className="text-xs text-white/80">
          You will be redirected to Mailchimp to confirm your subscription.
        </p>
      </form>
    </div>
  );
}
