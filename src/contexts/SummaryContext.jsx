import React, { createContext, useContext, useState } from 'react';
import studyMaterialGenerator from '../services/studyMaterialGenerator';

const SummaryContext = createContext();

export const useSummary = () => useContext(SummaryContext);

export const SummaryProvider = ({ children }) => {
  const [summary, setSummary] = useState('');
  const [studyMaterials, setStudyMaterials] = useState({
    questions: [],
    flashcards: [],
    isGenerated: false
  });

  const generateStudyMaterials = (summaryText) => {
    if (!summaryText) return;
    
    const materials = studyMaterialGenerator.generateStudyMaterials(summaryText);
    setStudyMaterials(materials);
  };

  const clearStudyMaterials = () => {
    setStudyMaterials({
      questions: [],
      flashcards: [],
      isGenerated: false
    });
  };

  return (
    <SummaryContext.Provider value={{ 
      summary, 
      setSummary, 
      studyMaterials, 
      generateStudyMaterials, 
      clearStudyMaterials 
    }}>
      {children}
    </SummaryContext.Provider>
  );
};
