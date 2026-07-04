import React from 'react';
import { publications } from '../utils/mock';
import { Card } from '../components/ui/card';
import { BookOpen, Calendar } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Publications</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg">
            Published research work and academic contributions
          </p>
        </div>

        <div className="space-y-8">
          {publications && publications.map((pub, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8 lg:p-12 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-10 h-10 text-cyan-400" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{pub.title}</h3>
                    <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full font-semibold uppercase">
                      {pub.publisher}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mb-6">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">{pub.date}</span>
                  </div>

                  <ul className="space-y-2">
                    {pub.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0">•</span>
                        <span className="text-gray-300 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
