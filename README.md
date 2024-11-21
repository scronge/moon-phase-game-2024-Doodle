# Moon Phase Game (Inspired on a Google Doodle)

A very crude Javascript/HTML/CSS implementation based on Google's moon phase game, just for fun and educational purposes. 

I was curious how much effort goes into a project like it so I made a minimal prototype with ChatGPT. Pull requests welcome for anyone willing to improve it, but there's no plan to continue developing it. 

Try it at [https://scronge.github.io/moon-phase-game-Oct-2024-Google-Doodle/ ](https://scronge.github.io/moon-phase-game-Oct-2024-Doodle/
)

![image](https://github.com/user-attachments/assets/55859a13-a815-4dbc-ae53-0580e1990432)
![image](https://github.com/user-attachments/assets/5b9e5fc1-abae-4079-8580-3be5352324bf)


**Original Edition (Full Game)**: 

[https://doodles.google/doodle/rise-of-the-half-moon/](https://doodles.google/doodle/rise-of-the-half-moon/)

[https://doodles.google/doodle/rise-of-the-half-moon-november/](https://doodles.google/doodle/rise-of-the-half-moon-november/)


## Game Mechanics:
- **Players**: Two players take turns placing moon phase cards.
- **Phases**: The phases follow a cycle from New Moon to Waning Crescent.
- **Scoring**:
  - Phase pairs: 1 star.
  - Full moon pairs (opposite phases): 2 stars.
  - Lunar cycle: Stars equal to the cycle's length.
  
## TODO:
- Fix SVG numbering / moon phases
- Implement scoring logic
   - Phase pair and full moon detection
   - Cycle detection (DFS, Johnson's Algorithm)
   - Scoring card ownership
- Visual embellishments
   - Improve UI design
      - Cards
      - Connections
- Animations
   - Animate card placements and score updates
- Extend multiplayer support (currently two players)
   - Allow more than two players
- Show all hands separately
   - Display each player’s hand separately
- Support custom graph-based layouts for the board
   - Allow flexible board configurations
- Introduce computer players
   - Implement non-random AI for solo play
- Game extensions
   - Special cards like those in the game, or moves like swapping adjacent cards, wildcards, reversing, or connecting and severing nodes
   - Extended cycle lengths (instead of mod 8 arithmetic) 
   - Directed graphs
   - Custom scoring logic
- Nice to haves
   - When holding a card on top of a space, highlight their interactions
   - When grabbing a card, highlight cells in which it would have a proper cycle placement
   - Show overlay of all moon cycles achieved by the move 
