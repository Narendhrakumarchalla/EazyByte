import React from "react";
const PostUsagePage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
    <textarea className="w-full h-40 border rounded p-2" placeholder="Write your experience..." />
    <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
  </div>
);
export default PostUsagePage;
