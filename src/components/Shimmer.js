const Shimmer = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
                <div
                    key={i}
                    className="h-64 animate-pulse rounded-xl border border-slate-200 bg-white p-4"
                >
                    <div className="h-36 w-full rounded-lg bg-slate-200" />
                    <div className="mt-4 h-4 w-3/4 rounded bg-slate-200" />
                    <div className="mt-2 h-4 w-1/2 rounded bg-slate-200" />
                    <div className="mt-4 h-6 w-24 rounded bg-slate-200" />
                </div>
            ))}
        </div>
    );
};

export default Shimmer;