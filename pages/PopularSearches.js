import { useEffect, useState } from 'react';
import Link from 'next/link';

function PopularSearches() {
    const [popularSearches, setPopularSearches] = useState([]);

    // Load popular searches from local storage when the component mounts
    useEffect(() => {
        const storedSearches = JSON.parse(localStorage.getItem('popularSearches')) || [];
        setPopularSearches(storedSearches.slice(0, 7)); // Only show up to 7 popular searches
    }, []);

    return (
        <div className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
            <strong>Popular Searches:</strong>
            {popularSearches.map((term, index) => (
                <Link legacyBehavior href={`#`} key={index}>
                    <a>{term}{index < popularSearches.length - 1 ? ', ' : ''}</a>
                </Link>
            ))}
        </div>
    );
}

export default PopularSearches;

// Function to add a new search term to popular searches
const addSearchTerm = (term) => {
    let searches = JSON.parse(localStorage.getItem('popularSearches')) || [];
    
    // Check if the term already exists
    if (!searches.includes(term)) {
        searches.unshift(term); // Add new term to the start of the list
    } else {
        // Move the existing term to the start if it's already in the list
        searches = [term, ...searches.filter(t => t !== term)];
    }

    // Keep only the 7 most recent searches
    searches = searches.slice(0, 7);

    // Save back to local storage and update the state
    localStorage.setItem('popularSearches', JSON.stringify(searches));
    setPopularSearches(searches);
};
