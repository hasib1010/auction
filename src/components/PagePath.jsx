import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PagePath({ items, maxLength = 16 }) {

    const truncateText = (text, maxLen) => {
        if (text.length <= maxLen) return text;
        return text.slice(0, maxLen) + '...';
    };

    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-600 py-4">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    {index > 0 && (
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    )}
                    {item.href && index < items.length - 1 ? (
                        <Link
                            href={item.href}
                            className="hover:text-blue-600 transition-colors duration-200"
                            title={item.label}
                        >
                            {truncateText(item.label, maxLength)}
                        </Link>
                    ) : (
                        <span className={index === items.length - 1 ? 'text-gray-900 font-medium' : ''} title={item.label}>
                            {truncateText(item.label, maxLength)}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    )
}
