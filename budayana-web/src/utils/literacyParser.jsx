import React from 'react';

// Hardcoded keywords per topic/story (Extensible dictionary)
const STORY_KEYWORDS = {
  // Global / Generic keywords
  global: [],
  // Example for Bali Rumah Adat (or just all known keywords since we check exactly)
  keywords: [
    "Asta Kosala Kosali", 
    "Tri Hita Karana", 
    "Parahyangan", 
    "Pawongan", 
    "Palemahan",
    "Hasta", 
    "Depa",
    "Rumah Baileo",
    "Rumah Gadang",
    "Gonjong",
    "Ijuk",
    "Rumah Honai",
    "Rumah Joglo",
    "Rumah Limas",
    "Bakar Batu"
  ]
};

/**
 * Splits a long text into shorter pages (cards).
 * Uses \n\n if available, otherwise chunks by 1-2 sentences.
 */
export const getLiteracyPages = (text) => {
  if (!text) return [];
  
  // 1. Try splitting by explicit paragraphs first
  if (text.includes('\n\n')) {
    return text.split('\n\n').map(p => p.trim()).filter(p => p.length > 0);
  }

  // 2. Fallback to splitting by sentences if it's one big wall of text
  // Match sentences ending with ., !, or ?
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const pages = [];
  
  // Group max 2 sentences per page
  let currentGroup = [];
  for (let i = 0; i < sentences.length; i++) {
    currentGroup.push(sentences[i].trim());
    if (currentGroup.length >= 2 || i === sentences.length - 1) {
      pages.push(currentGroup.join(' '));
      currentGroup = [];
    }
  }

  return pages;
};

/**
 * Highlights known keywords in a text by wrapping them in a <span className="keyword-highlight">
 */
export const highlightKeywords = (text) => {
  if (!text) return null;

  // Use the predefined keywords
  const keywords = STORY_KEYWORDS.keywords;
  
  // Create a regex to match any of the keywords (case-insensitive or exact, we use exact/case-insensitive here)
  // Sort by length descending to match longer phrases first (e.g., "Rumah Baileo" before "Rumah")
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  
  // Escape regex special chars just in case
  const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(${sortedKeywords.map(escapeRegExp).join('|')})`, 'gi');

  // Split text by the matched keywords
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) => {
        // Check if this part is a keyword (match case-insensitively against our list)
        const isKeyword = sortedKeywords.some(kw => kw.toLowerCase() === part.toLowerCase());
        
        if (isKeyword) {
          return (
            <span key={index} className="keyword-highlight">
              {part}
            </span>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};
