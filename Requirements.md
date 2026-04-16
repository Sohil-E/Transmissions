content = """# Project Requirements Document: Interactive Study Application

## 1. Project Overview
**Objective:** Build an interactive, web-based educational tool to help engineering and physics students master Electromagnetics, Antennas, and Transmission Lines. The application will reinforce core concepts and formulas through active recall (Flashcards) and test comprehension through assessed problem-solving (Knowledge Check Quiz).

## 2. Target Audience
* Undergraduate engineering and physics students.
* Anyone studying basic electromagnetics, transmission line theory, or antenna fundamentals.

## 3. Core Features
The application is divided into two primary modules accessed via a top-level navigation system.

### Module A: Flashcard Deck (Active Recall)
* **Purpose:** Allow users to memorize definitions, formulas, and key concepts.
* **Mechanics:** * Display a single card at a time in the center of the screen.
  * Show the "Front" (Question/Term) first.
  * Provide a "Flip" interaction to reveal the "Back" (Answer/Definition).
  * Provide "Next" and "Previous" navigation controls to iterate through the deck.
  * Include a deck counter (e.g., "Card 3 of 10").

### Module B: Knowledge Check (Assessment)
* **Purpose:** Test the user's understanding using practical and theoretical multiple-choice questions.
* **Mechanics:**
  * Display questions sequentially or in a scrollable list.
  * Provide 3-4 clickable options for each question.
  * Deliver immediate visual feedback upon selection (e.g., highlight correct answers, visually distinguish incorrect choices).
  * Track the user's score in real-time.
  * Display a final score summary when all questions are answered.

## 4. Functional Requirements
* **F1 - Navigation:** The user must be able to seamlessly switch between the "Flashcards" view and the "Quiz" view without losing their progress in either section.
* **F2 - State Management:** The application must remember which flashcard the user is currently viewing and the current score of the quiz during a session.
* **F3 - Interactivity:** All interactive elements (flip, next, previous, option selection) must trigger instantly without requiring a page reload.
* **F4 - Quiz Logic:** Once a user selects a quiz answer, the selection for that specific question should be locked in to prevent score manipulation, while immediately revealing the correct answer.

## 5. Non-Functional Requirements
* **UI/UX Design:** The interface must be clean, distraction-free, and academic. Visual distinctions between the front and back of flashcards must be clear (e.g., different background shades or borders). 
* **Responsiveness:** The layout must adapt gracefully to different screen sizes, working equally well on mobile phones, tablets, and desktop monitors.
* **Accessibility:** * Text must maintain a high contrast ratio against backgrounds.
  * Navigation and interactive elements must be usable via keyboard (Tab and Enter keys).
* **Performance:** The data payload (questions and flashcards) should load instantly upon opening the application.

## 6. Data & Content Architecture
The application will be driven by a static JSON data structure containing the study materials. 

**Data Schema Example:**

```json
{
  "flashcards": [
    {
      "id": 1,
      "front": "What is a TEM Wave?",
      "back": "A Transverse Electromagnetic wave where the Electric and Magnetic fields are perpendicular..."
    }
  ],
  "quiz": [
    {
      "id": 1,
      "question": "What happens if a transmission line is short-circuited?",
      "options": ["Reflection coefficient is 0", "Reflection coefficient is -1", "Reflection coefficient is 1"],
      "correctAnswerIndex": 1
    }
  ]
}