import React from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Tag = ({ children, color }) => (
  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${color} m-1`}>
    {children}
  </span>
);

const ArticleTag = () => {
  return (
    <Card className="border border-gray-300 rounded-l-lg bg-skyblue w-full max-w-md rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-bold mb-4">Article Tag</CardTitle>
        <div className="flex flex-wrap -m-1">
        <Tag color="bg-pink-200">Domain</Tag>
          <Tag color="bg-purple-200">Kilat Storage</Tag>
          <Tag color="bg-indigo-200">Cyberduck</Tag>
          <Tag color="bg-blue-200">kilat</Tag>
        </div>
        <div className="flex flex-wrap -m-1 mt-2">
          <Tag color="bg-green-200">Virtual Machine</Tag>
          <Tag color="bg-yellow-200">Kilat Hosting</Tag>
          <Tag color="bg-orange-200">Kilat Protect</Tag>
        </div>
        <div className="flex flex-wrap -m-1 mt-2">
          <Tag color="bg-red-200">Linux</Tag>
          <Tag color="bg-pink-200">Dragondisk</Tag>
          <Tag color="bg-purple-200">Hosting</Tag>
          <Tag color="bg-indigo-200">FTP</Tag>
          <Tag color="bg-blue-200">DNS</Tag>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleTag;