export default function TodoHeader() {
  return (
    <div className="text-center mb-8">
      <h1 className="font-bold text-6xl mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
        MY-TO-DO APP
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto rounded-full"></div>
      <p className="text-gray-600 mt-4 text-lg font-medium">
        Stay organized with smart reminders
      </p>
    </div>
  );
}
