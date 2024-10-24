# Moon Phase Game (Google Doodle Clone)

The clone of Google's moon phase game, just for fun. **UNDER DEVELOPMENT!** 

Minimal initial prototype completed in a few hours

Try it at https://scronge.github.io/moon-phase-game-Oct-2024-Google-Doodle/ 

![image](https://github.com/user-attachments/assets/55859a13-a815-4dbc-ae53-0580e1990432)


**Original Edition (Full Game)**: [https://doodles.google/doodle/rise-of-the-half-moon/](https://doodles.google/doodle/rise-of-the-half-moon/)

![image](https://github.com/user-attachments/assets/88f1608e-0a81-4de7-b270-c5510199d920)


## Game Mechanics:
- **Players**: Two players take turns placing moon phase cards.
- **Phases**: The phases follow a cycle from New Moon to Waning Crescent.
- **Scoring**:
  - Phase pairs: 1 star.
  - Full moon pairs (opposite phases): 2 stars.
  - Lunar cycle: Stars equal to the cycle's length.
  
## TODO:
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
   - Special cards like those in the game, or moves like swapping / connecting / severing
   - Extended cycle lengths (instead of mod 8 arithmetic) 
   - Directed graphs
