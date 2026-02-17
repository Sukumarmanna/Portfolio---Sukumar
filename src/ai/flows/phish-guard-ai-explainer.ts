'use server';
/**
 * @fileOverview A Genkit flow for an AI assistant that provides concise explanations about the Phishing URL Detection System project.
 *
 * - phishGuardAIExplainer - A function that handles user questions about the project.
 * - PhishGuardAIExplainerInput - The input type for the phishGuardAIExplainer function.
 * - PhishGuardAIExplainerOutput - The return type for the phishGuardAIExplainer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PhishGuardAIExplainerInputSchema = z.object({
  question: z.string().describe('The user\'s question about the Phishing URL Detection System project.'),
});
export type PhishGuardAIExplainerInput = z.infer<typeof PhishGuardAIExplainerInputSchema>;

const PhishGuardAIExplainerOutputSchema = z.object({
  explanation: z.string().describe('A concise and informative explanation in response to the user\'s question.'),
});
export type PhishGuardAIExplainerOutput = z.infer<typeof PhishGuardAIExplainerOutputSchema>;

export async function phishGuardAIExplainer(input: PhishGuardAIExplainerInput): Promise<PhishGuardAIExplainerOutput> {
  return phishGuardAIExplainerFlow(input);
}

const phishGuardCaseStudy = `
Project Name: Phishing URL Detection System

Problem: The ever-growing threat of phishing attacks which can lead to significant data breaches, financial loss, and erosion of trust. Traditional methods for detecting these malicious URLs are often not fast enough to provide real-time protection for users.

Solution: This project is a full-stack application designed to classify URLs as either legitimate or phishing attempts in real-time. It features a responsive user interface built with HTML, CSS, and JavaScript, and a powerful backend driven by a Python-based Decision Tree machine learning model. This allows users to get immediate feedback on the safety of a URL.

Technical Stack:
- Frontend: HTML, CSS, and JavaScript for a responsive and intuitive user experience.
- Backend: Python, which hosts the machine learning model.
- Machine Learning Model: A Decision Tree algorithm was chosen for its high accuracy and interpretability in classifying URLs.
- Core Feature: Implemented input validation and a user-friendly dashboard to enhance usability and provide clear results.

Result: The Phishing URL Detection System is a practical tool that enhances web security. It provides an effective, proactive defense against phishing threats by offering real-time URL analysis. This project demonstrates a strong capability in building full-stack applications with integrated machine learning solutions.
`;

const prompt = ai.definePrompt({
  name: 'phishGuardAIExplainerPrompt',
  input: {schema: PhishGuardAIExplainerInputSchema},
  output: {schema: PhishGuardAIExplainerOutputSchema},
  prompt: `Act as a Senior Creative Developer and an AI assistant for Sukumar Manna's portfolio. Your goal is to provide concise, technical, and authoritative yet approachable explanations about the Phishing URL Detection System project.\n\nHere is the detailed case study for the project:\n${phishGuardCaseStudy}\n\nBased on the provided case study, answer the following question. Be brief and to the point.\n\nQuestion: {{{question}}}\nExplanation:`,
});

const phishGuardAIExplainerFlow = ai.defineFlow(
  {
    name: 'phishGuardAIExplainerFlow',
    inputSchema: PhishGuardAIExplainerInputSchema,
    outputSchema: PhishGuardAIExplainerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
