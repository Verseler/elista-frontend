export default function DashboardOverview() {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white mb-6">
          <h3 className="text-xl font-semibold mb-2">Dashboard Overview</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="opacity-80">Total Borrowers</p>
              <p className="text-2xl font-bold">25</p>
            </div>
            <div>
              <p className="opacity-80">Outstanding</p>
              <p className="text-2xl font-bold">₱12,500</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">John Doe</span>
            <span className="text-red-600 font-semibold">₱1,250</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">Jane Doe</span>
            <span className="text-green-600 font-semibold">Paid</span>
          </div>
        </div>
      </div>
    </div>
  );
}
