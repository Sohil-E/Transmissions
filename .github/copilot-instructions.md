# Copilot Instructions

## Build, test, and lint commands
No build, test, lint, or single-test command is defined in the current repository files.

## High-level architecture
Derived from `Requirements.md`:
- The planned application has two top-level modules: **Flashcard Deck** and **Knowledge Check Quiz**.
- Users can switch between modules without losing in-session progress (flashcard position and quiz score).
- Interaction is instant without page reload for card flipping/navigation and quiz answer selection.
- Study content is driven by static JSON with `flashcards[]` and `quiz[]`; quiz items use `correctAnswerIndex`.

## Key conventions from project requirements
- Preserve independent progress across modules when switching views (flashcard position and quiz score should not reset during a session).
- Quiz answers are single-select and lock after first selection for each question.
- Correct/incorrect feedback is immediate on selection.
- Flashcard behavior is single-card focus with explicit flip/next/previous controls and visible deck position.
- UI decisions should maintain keyboard usability (Tab/Enter), high contrast text, and responsive layouts for mobile/tablet/desktop.
