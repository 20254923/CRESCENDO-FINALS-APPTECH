const DIAGRAM_BASE = `${import.meta.env?.BASE_URL ?? '/'}diagrams/`;

export const INSTRUMENTS = [
  { id: 'guitar', name: 'Guitar', icon: '🎸', sub: '6 strings, endless styles' },
  { id: 'piano', name: 'Piano', icon: '🎹', sub: 'Keys to music theory' },
  { id: 'drums', name: 'Drums', icon: '🥁', sub: 'Keep the rhythm alive' },
  { id: 'ukulele', name: 'Ukulele', icon: '🪕', sub: '4 strings, big fun' },
  { id: 'violin', name: 'Violin', icon: '🎻', sub: 'Strings & expression' },
  { id: 'bass', name: 'Bass', icon: '🎸', sub: 'The foundation of sound' },
];

export const TIERS = ['beginner', 'intermediate', 'advanced'];

export const TIER_LABELS = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
};

export const INSTRUMENT_DATA = {
  guitar: {
    beginner: [
      {
        id: 'g-b-1',
        title: 'Parts of the Guitar',
        desc: 'Anatomy & structure',
        explanation: [
          'A guitar is made up of a body, neck, fretboard, headstock, and strings. The body amplifies the vibration of the strings while the neck provides a stable platform for finger placement.',
          'The fretboard is marked with frets that define pitch when strings are pressed down. Understanding the basic layout helps new players identify open chords and scales quickly.',
          'The bridge anchors the strings and transfers vibration into the body, while tuning pegs on the headstock keep each string in tune. Proper setup makes the instrument easier to play and sound better.'
        ],
        videoUrl: 'https://www.youtube.com/embed/BBz-Jyr23M4',
        diagramUrl: `${DIAGRAM_BASE}g-b-1.svg`,
        diagramCaption: 'Labeled diagram of acoustic guitar parts',
        quiz: [
          {
            question: 'What are the metal strips on the fretboard called?',
            options: ['Strings', 'Frets', 'Pegs', 'Nuts'],
            answer: 'Frets'
          },
          {
            question: 'Which part holds the strings at the top of the guitar?',
            options: ['Bridge', 'Pickguard', 'Headstock', 'Soundhole'],
            answer: 'Headstock'
          },
          {
            question: 'What part transfers vibrations from the strings to the body?',
            options: ['Neck', 'Bridge', 'Nut', 'Saddle'],
            answer: 'Bridge'
          },
          {
            question: 'Which component is used to tune the guitar strings?',
            options: ['Tuning pegs', 'Pickups', 'Fret markers', 'Strap buttons'],
            answer: 'Tuning pegs'
          }
        ]
      },
      {
        id: 'g-b-2',
        title: 'Holding the Guitar',
        desc: 'Posture and hand position',
        explanation: [
          'Proper posture keeps your shoulders relaxed and your back straight. Sitting with the guitar resting on your thigh creates stability for your fretting and strumming hands.',
          'The fret hand should reach the strings with the thumb behind the neck and fingers curved. This hand position allows for clear notes and easier chord transitions.',
          'Your picking hand should float over the soundhole for an acoustic guitar or over the pickups for an electric guitar. Maintain gentle tension and avoid gripping too tightly.'
        ],
        videoUrl: 'https://www.youtube.com/embed/jq0ZAc97cAY',
        diagramUrl: `${DIAGRAM_BASE}g-b-2.svg`,
        diagramCaption: 'Proper guitar holding technique and hand placement',
        quiz: [
          {
            question: 'Where should your thumb be placed on the fret hand?',
            options: ['Behind the neck', 'On top of the strings', 'On the bridge', 'Under the guitar'],
            answer: 'Behind the neck'
          },
          {
            question: 'Which area is best for strumming an acoustic guitar?',
            options: ['Soundhole area', 'Headstock', 'Nut', 'Bridge pins'],
            answer: 'Soundhole area'
          },
          {
            question: 'Good posture helps prevent what issue?',
            options: ['Improved tempo', 'Hand cramps', 'String snapping', 'Tuner drift'],
            answer: 'Hand cramps'
          },
          {
            question: 'The picking hand should be:',
            options: ['Tight and rigid', 'Loose and relaxed', 'Far from the strings', 'Behind the neck'],
            answer: 'Loose and relaxed'
          }
        ]
      },
      {
        id: 'g-b-3',
        title: 'First Open Chords',
        desc: 'G, C, D, and Em',
        explanation: [
          'Open chords use open strings to create full, easy shapes that are perfect for beginners. The G, C, D, and Em chords are foundational for many songs.',
          'Learn each chord slowly, placing fingers precisely on the frets. Avoid touching adjacent strings so every note rings clearly.',
          'Practice switching between two chords at a time, then build speed. Smooth transitions are more important than playing fast at first.'
        ],
        videoUrl: 'https://www.youtube.com/embed/TygIhcR5rgY',
        diagramUrl: `${DIAGRAM_BASE}g-b-3.svg`,
        diagramCaption: 'Guitar chord diagrams for beginner open chords',
        quiz: [
          {
            question: 'Which chord uses the open 6th string?',
            options: ['C major', 'D major', 'G major', 'Em'],
            answer: 'G major'
          },
          {
            question: 'Which chord is made of only two fingers and one open string?',
            options: ['D major', 'Em', 'C major', 'G major'],
            answer: 'Em'
          },
          {
            question: 'A clean chord sound means:',
            options: ['Muted frets', 'All strings ring clearly', 'Skipping strings', 'Playing loud'],
            answer: 'All strings ring clearly'
          },
          {
            question: 'Which chord is not an open chord in this lesson?',
            options: ['G major', 'C major', 'A major', 'D major'],
            answer: 'A major'
          }
        ]
      }
    ],
    intermediate: [
      {
        id: 'g-i-1',
        title: 'Barre Chord Basics',
        desc: 'Using the index finger as a bar',
        explanation: [
          'Barre chords allow you to move chord shapes up and down the neck. The index finger presses multiple strings at once, creating a movable chord foundation.',
          'Start with the E-shape barre chord at the first fret, then move it to the third fret. This pattern is one of the most useful tools for playing in different keys.',
          'Focus on finger strength, keeping the thumb centered behind the neck. Light muting or pain can be relieved by gradual practice and correct hand position.'
        ],
        videoUrl: 'https://www.youtube.com/embed/Hv1Yae75BGI',
        diagramUrl: `${DIAGRAM_BASE}g-i-1.svg`,
        diagramCaption: 'Barre chord fingering and positioning guide',
        quiz: [
          {
            question: 'What does a barre chord allow you to do?',
            options: ['Play only open chords', 'Move chord shapes up the neck', 'Use a capo', 'Tune the guitar'],
            answer: 'Move chord shapes up the neck'
          },
          {
            question: 'Which finger forms the bar in a barre chord?',
            options: ['Thumb', 'Middle finger', 'Index finger', 'Pinky'],
            answer: 'Index finger'
          },
          {
            question: 'A common barre chord shape is based on which open chord?',
            options: ['A minor', 'E major', 'D major', 'C major'],
            answer: 'E major'
          },
          {
            question: 'Good barre chord technique depends on:',
            options: ['Fast strumming', 'Finger strength and placement', 'Using a pick only', 'Soft strings only'],
            answer: 'Finger strength and placement'
          }
        ]
      },
      {
        id: 'g-i-2',
        title: 'Scale Shapes',
        desc: 'Major and minor pentatonic',
        explanation: [
          'Scale patterns help you navigate the fretboard and build solos. The pentatonic scale is especially useful because it fits well over many chord progressions.',
          'Practice the major pentatonic shape in the key of G, then switch to the minor pentatonic shape in E. Use alternate picking to develop consistency.',
          'Memorizing the shape and its root notes gives you the freedom to improvise. Play the same shape in different positions to hear how the scale changes with each key.'
        ],
        videoUrl: 'https://www.youtube.com/embed/-X84GG06g-c',
        diagramUrl: `${DIAGRAM_BASE}g-i-2.svg`,
        diagramCaption: 'Pentatonic scale patterns on the guitar fretboard',
        quiz: [
          {
            question: 'The pentatonic scale has how many notes?',
            options: ['5', '6', '7', '8'],
            answer: '5'
          },
          {
            question: 'Which scale is most common for rock solos?',
            options: ['Chromatic', 'Minor pentatonic', 'Major scale', 'Whole tone'],
            answer: 'Minor pentatonic'
          },
          {
            question: 'Scale shapes help with:',
            options: ['Tuning only', 'Fretboard navigation', 'Replacing chords', 'Changing strings'],
            answer: 'Fretboard navigation'
          },
          {
            question: 'Alternate picking is used to:',
            options: ['Tune the guitar', 'Strum chords', 'Play scale notes evenly', 'Mute the strings'],
            answer: 'Play scale notes evenly'
          }
        ]
      },
      {
        id: 'g-i-3',
        title: 'Strumming Patterns',
        desc: 'Dynamics and rhythm',
        explanation: [
          'Strumming patterns define the groove of a song. Practice downstrokes and upstrokes to create consistent rhythm and feel for each chord progression.',
          'Use accents on strong beats and soften off-beats. This creates a musical pattern that feels natural and helps the guitar part support the song.',
          'Combine quarter notes, eighth notes, and syncopation gradually. Start slow, then increase tempo as your hand coordination improves.'
        ],
        videoUrl: 'https://www.youtube.com/embed/zi6CRi0SXLM',
        diagramUrl: `${DIAGRAM_BASE}g-i-3.svg`,
        diagramCaption: 'Guitar strumming pattern notation and rhythm guide',
        quiz: [
          {
            question: 'What is a downstroke?',
            options: ['Moving the pick upward', 'Moving the pick downward', 'Plucking one string', 'Muting the strings'],
            answer: 'Moving the pick downward'
          },
          {
            question: 'What creates groove in a strumming pattern?',
            options: ['Static volume', 'Accents and rhythm', 'Open chords only', 'No strumming'],
            answer: 'Accents and rhythm'
          },
          {
            question: 'Syncopation means:',
            options: ['Playing only on the beat', 'Playing off the expected beat', 'Changing tuning', 'Strumming louder'],
            answer: 'Playing off the expected beat'
          },
          {
            question: 'A strong beat is often accented on which count?',
            options: ['1 and 3', '2 and 4', '1 and 4', '3 and 4'],
            answer: '1 and 3'
          }
        ]
      }
    ],
    advanced: [
      {
        id: 'g-a-1',
        title: 'Fingerstyle Basics',
        desc: 'Playing melody and bass together',
        explanation: [
          'Fingerstyle guitar uses the thumb and fingers to play bass lines and melody simultaneously. This technique creates a fuller sound and builds independence between both hands.',
          'Start with a simple pattern where the thumb plays the bass string and the index, middle, and ring fingers pluck higher strings. Keep your wrist relaxed for smooth execution.',
          'Learn a basic Travis picking pattern and practice slowly until each note rings clearly. This style is common in folk, pop, and acoustic arrangements.'
        ],
        videoUrl: 'https://www.youtube.com/embed/NDng4Duv1WA',
        diagramUrl: `${DIAGRAM_BASE}g-a-1.svg`,
        diagramCaption: 'Fingerstyle technique with bass and melody separation',
        quiz: [
          {
            question: 'Fingerstyle uses which hand to pluck strings?',
            options: ['Fretting hand', 'Picking hand with fingers', 'Both hands together only', 'Elbow'],
            answer: 'Picking hand with fingers'
          },
          {
            question: 'A common fingerstyle pattern is called:',
            options: ['Strumming', 'Travis picking', 'Power chord', 'Palm muting'],
            answer: 'Travis picking'
          },
          {
            question: 'Fingerstyle gives the guitar a sound like:',
            options: ['Drums only', 'A full ensemble', 'A single note', 'Muted chord'],
            answer: 'A full ensemble'
          },
          {
            question: 'Keeping the wrist relaxed helps with:',
            options: ['Faster chord changes', 'Sharper tuning', 'Smooth plucking', 'Louder strumming'],
            answer: 'Smooth plucking'
          }
        ]
      },
      {
        id: 'g-a-2',
        title: 'Advanced Chord Shapes',
        desc: 'Sus2, sus4, and add9',
        explanation: [
          'Extended chords like sus2, sus4, and add9 add color to basic progressions. These shapes are used in modern acoustic songs and help connect melody to harmony.',
          'A sus2 chord replaces the third with a second, while sus4 replaces the third with a fourth. The add9 chord adds a ninth on top of a major triad.',
          'Practice switching between these shapes and standard major chords. Listen for the brighter or more open sound that each extended chord creates.'
        ],
        videoUrl: 'https://www.youtube.com/embed/epYhXkgqusA',
        diagramUrl: `${DIAGRAM_BASE}g-a-2.svg`,
        diagramCaption: 'Chord diagrams for sus2, sus4, and add9 guitar shapes',
        quiz: [
          {
            question: 'A sus2 chord replaces which interval?',
            options: ['Third with second', 'Fifth with seventh', 'Root with fourth', 'Second with third'],
            answer: 'Third with second'
          },
          {
            question: 'An add9 chord adds what note?',
            options: ['Ninth', 'Fourth', 'Fifth', 'Seventh'],
            answer: 'Ninth'
          },
          {
            question: 'Extended chords are useful for:',
            options: ['Playing faster', 'Creating richer harmony', 'Tuning the guitar', 'Replacing strings'],
            answer: 'Creating richer harmony'
          },
          {
            question: 'Sus4 typically sounds:',
            options: ['Darker', 'Open and suspended', 'Muted', 'Dissonant'],
            answer: 'Open and suspended'
          }
        ]
      },
      {
        id: 'g-a-3',
        title: 'Improvisation Concepts',
        desc: 'Phrasing over chord progressions',
        explanation: [
          'Improvisation begins with listening to chord progressions and choosing notes that fit the harmony. Use scale fragments and simple melodies rather than trying to play too much at once.',
          'Practice phrasing by leaving space between notes and emphasizing strong beats. A musical phrase often feels like a sentence, with a beginning, middle, and end.',
          'Use dynamics and note length to create tension and release. Start in a comfortable key and gradually explore outside notes once confidence grows.'
        ],
        videoUrl: 'https://www.youtube.com/embed/3KQQrfOYL3M',
        diagramUrl: `${DIAGRAM_BASE}g-a-3.svg`,
        diagramCaption: 'Improvisation strategy for guitar phrasing and melody',
        quiz: [
          {
            question: 'Improvisation is best started with:',
            options: ['Random notes', 'Listening to harmony', 'Only open chords', 'Shredding fast'],
            answer: 'Listening to harmony'
          },
          {
            question: 'A musical phrase often resembles:',
            options: ['A single beat', 'A sentence', 'A drum fill', 'A tuning process'],
            answer: 'A sentence'
          },
          {
            question: 'Leaving space between notes helps:',
            options: ['Make it boring', 'Create tension and release', 'Tune the guitar', 'Mute the strings'],
            answer: 'Create tension and release'
          },
          {
            question: 'Improvising in a new key is easier with:',
            options: ['A comfortable scale', 'No practice', 'Loud volume', 'Fast tempo'],
            answer: 'A comfortable scale'
          }
        ]
      }
    ]
  },
  piano: {
    beginner: [
      {
        id: 'p-b-1',
        title: 'Keyboard Layout',
        desc: 'White keys, black keys, and middle C',
        explanation: [
          'The piano keyboard is arranged in repeating groups of 12 notes, with black keys forming patterns of twos and threes. Middle C sits near the center and is a key reference point for beginners.',
          'White keys represent the natural notes A through G, while black keys are sharps and flats. Learning the pattern helps you find any note quickly across the keyboard.',
          'Understanding the layout enables you to play scales, chords, and melodies with confidence. Start by identifying C major and A minor positions using white keys only.'
        ],
        videoUrl: 'https://www.youtube.com/embed/4SXQ_wlbWog',
        diagramUrl: `${DIAGRAM_BASE}p-b-1.svg`,
        diagramCaption: 'Piano keyboard layout with middle C highlighted',
        quiz: [
          {
            question: 'What sets do the black keys form?',
            options: ['Pairs of two and three', 'Sets of four', 'Single keys', 'Only one group'],
            answer: 'Pairs of two and three'
          },
          {
            question: 'Middle C is located:',
            options: ['At the very left', 'At the very right', 'Near the center', 'Above the keys'],
            answer: 'Near the center'
          },
          {
            question: 'White keys represent:',
            options: ['Sharps and flats', 'Natural notes', 'Pedals', 'Chords'],
            answer: 'Natural notes'
          },
          {
            question: 'The repeating pattern on piano spans:',
            options: ['7 notes', '10 notes', '12 notes', '14 notes'],
            answer: '12 notes'
          }
        ]
      },
      {
        id: 'p-b-2',
        title: 'Basic Finger Numbers',
        desc: 'Thumb to pinky',
        explanation: [
          'Finger numbers are used to describe which finger should play each note. The thumb is 1, index is 2, middle is 3, ring is 4, and pinky is 5.',
          'Using consistent fingerings helps you play smoothly and avoid awkward hand positions. It is especially important when learning simple melodies and scales.',
          'Practice five-finger exercises on both hands separately. This trains strength and coordination before moving on to more complex pieces.'
        ],
        videoUrl: 'https://www.youtube.com/embed/tEtukfFv3Wk',
        diagramUrl: `${DIAGRAM_BASE}p-b-2.svg`,
        diagramCaption: 'Finger numbering for piano technique',
        quiz: [
          {
            question: 'What number is the thumb?',
            options: ['1', '2', '3', '4'],
            answer: '1'
          },
          {
            question: 'Which finger is number 5?',
            options: ['Index', 'Middle', 'Ring', 'Pinky'],
            answer: 'Pinky'
          },
          {
            question: 'Consistent fingering improves:',
            options: ['Hand size', 'Smoothness', 'Tuning', 'Sound volume'],
            answer: 'Smoothness'
          },
          {
            question: 'Five-finger exercises focus on:',
            options: ['One hand only', 'All five fingers', 'Chords only', 'Pedal use'],
            answer: 'All five fingers'
          }
        ]
      },
      {
        id: 'p-b-3',
        title: 'Simple Songs',
        desc: 'Mary Had a Little Lamb',
        explanation: [
          'Beginner songs like Mary Had a Little Lamb use a limited range of notes and simple rhythms. These pieces help reinforce reading notes and building confidence.',
          'Start with one hand and learn the melody slowly. Once the right hand is comfortable, add the left hand with sustained notes or simple accompaniment.',
          'Repeat the song several times, focusing on steady tempo and consistent fingerings. Small, regular practice sessions yield better results than a single long session.'
        ],
        videoUrl: 'https://www.youtube.com/embed/1qcqdpjbBCA',
        diagramUrl: `${DIAGRAM_BASE}p-b-3.svg`,
        diagramCaption: 'Simple piano song notation and finger guide',
        quiz: [
          {
            question: 'Beginner songs often use how many notes?',
            options: ['Many notes', 'A limited range', 'All 88 keys', 'Only chords'],
            answer: 'A limited range'
          },
          {
            question: 'Start learning a song with:',
            options: ['Fast tempo', 'One hand slowly', 'No fingering', 'Pedal only'],
            answer: 'One hand slowly'
          },
          {
            question: 'Consistent practice should be:',
            options: ['Irregular', 'Short and regular', 'Only once a week', 'Never'],
            answer: 'Short and regular'
          },
          {
            question: 'The melody usually plays in which hand?',
            options: ['Left', 'Right', 'Both equally', 'Neither'],
            answer: 'Right'
          }
        ]
      }
    ],
    intermediate: [
      {
        id: 'p-i-1',
        title: 'Major and Minor Chords',
        desc: 'Chord quality and sound',
        explanation: [
          'Major chords sound bright and happy, while minor chords sound more melancholic. Learning the difference helps you interpret songs and choose the right accompaniment.',
          'A major chord is built from the root, major third, and perfect fifth. A minor chord uses a minor third instead, which shifts the mood of the harmony.',
          'Practice C, G, Am, and F chord shapes. Moving between these chords makes up many popular progressions and is essential for playing contemporary songs.'
        ],
        videoUrl: 'https://www.youtube.com/embed/mSlMzIJwypU',
        diagramUrl: `${DIAGRAM_BASE}p-i-1.svg`,
        diagramCaption: 'Piano chord patterns for major and minor harmony',
        quiz: [
          {
            question: 'A minor chord differs from a major chord by:',
            options: ['One semitone lower', 'One octave higher', 'Using black keys only', 'No difference'],
            answer: 'One semitone lower'
          },
          {
            question: 'Major chords typically sound:',
            options: ['Sad', 'Bright', 'Dissonant', 'Muted'],
            answer: 'Bright'
          },
          {
            question: 'The perfect fifth is the third note in the chord.',
            options: ['True', 'False', 'Sometimes', 'Only in minor'],
            answer: 'False'
          },
          {
            question: 'Am is a type of:',
            options: ['Major chord', 'Minor chord', 'Seventh chord', 'Diminished chord'],
            answer: 'Minor chord'
          }
        ]
      },
      {
        id: 'p-i-2',
        title: 'Reading Staff Notation',
        desc: 'Treble and bass clef basics',
        explanation: [
          'Staff notation uses five lines and four spaces to represent pitch. The treble clef is usually for right-hand melodies, and the bass clef is usually for left-hand accompaniment.',
          'Notes on the staff correspond to keys on the piano. Learning the most common note names reduces the need to look down and helps you read music faster.',
          'Practice simple exercises that alternate between both clefs. This helps connect visual notation with the physical keys and improves coordination.'
        ],
        videoUrl: 'https://www.youtube.com/embed/827jmswqnEA',
        diagramUrl: `${DIAGRAM_BASE}p-i-2.svg`,
        diagramCaption: 'Treble and bass clef notation guide for piano players',
        quiz: [
          {
            question: 'The treble clef is most often used for:',
            options: ['Left hand', 'Right hand', 'Pedals', 'Drums'],
            answer: 'Right hand'
          },
          {
            question: 'The staff has how many lines?',
            options: ['4', '5', '6', '7'],
            answer: '5'
          },
          {
            question: 'Bass clef is also called:',
            options: ['G clef', 'F clef', 'C clef', 'D clef'],
            answer: 'F clef'
          },
          {
            question: 'Learning both clefs improves:',
            options: ['Pedal use only', 'Music reading speed', 'Tuning accuracy', 'String bending'],
            answer: 'Music reading speed'
          }
        ]
      },
      {
        id: 'p-i-3',
        title: 'Arpeggios and Broken Chords',
        desc: 'Playing chords one note at a time',
        explanation: [
          'Arpeggios break a chord into individual notes played in sequence. This technique adds movement and interest to left-hand accompaniment.',
          'Practice playing C major and G major arpeggios slowly, keeping each note even. This builds finger independence and smooth hand motion.',
          'Combine arpeggios with a melody in the right hand. The result can sound full and dynamic without requiring advanced harmony.'
        ],
        videoUrl: 'https://www.youtube.com/embed/cJtHMeDeJ2I',
        diagramUrl: `${DIAGRAM_BASE}p-i-3.svg`,
        diagramCaption: 'Arpeggio patterns for piano broken chords',
        quiz: [
          {
            question: 'An arpeggio plays chord notes:',
            options: ['Simultaneously', 'One after another', 'Only the root', 'Only the third'],
            answer: 'One after another'
          },
          {
            question: 'Broken chords are another name for:',
            options: ['Arpeggios', 'Scale runs', 'Pedal tones', 'Rhythms'],
            answer: 'Arpeggios'
          },
          {
            question: 'Practicing arpeggios helps with:',
            options: ['Speed only', 'Finger independence', 'Tuning', 'String tension'],
            answer: 'Finger independence'
          },
          {
            question: 'Which hand often plays the arpeggio accompaniment?',
            options: ['Right', 'Left', 'Both', 'Neither'],
            answer: 'Left'
          }
        ]
      }
    ],
    advanced: [
      {
        id: 'p-a-1',
        title: 'Chord Inversions',
        desc: 'Smooth voice leading',
        explanation: [
          'Inversions rearrange chord notes so the bass note changes. This creates smoother transitions between chords and more interesting harmonic movement.',
          'Practice root position, first inversion, and second inversion for C, G, and F chords. Notice how each inversion changes the bass note while preserving chord quality.',
          'Voice leading is improved by choosing inversions that minimize hand movement. This technique is common in pop and classical piano arrangements.'
        ],
        videoUrl: 'https://www.youtube.com/embed/1C_h9Ks0bz4',
        diagramUrl: `${DIAGRAM_BASE}p-a-1.svg`,
        diagramCaption: 'Chord inversion diagrams for smooth piano transitions',
        quiz: [
          {
            question: 'An inversion changes which chord component?',
            options: ['Root note', 'Chord quality', 'Instrument', 'Tempo'],
            answer: 'Root note'
          },
          {
            question: 'First inversion places which note in the bass?',
            options: ['Root', 'Third', 'Fifth', 'Seventh'],
            answer: 'Third'
          },
          {
            question: 'Inversions are useful for:',
            options: ['Louder playing', 'Smoother voice leading', 'Tuning the piano', 'Taking rests'],
            answer: 'Smoother voice leading'
          },
          {
            question: 'A second inversion has which note lowest?',
            options: ['Root', 'Third', 'Fifth', 'Seventh'],
            answer: 'Fifth'
          }
        ]
      },
      {
        id: 'p-a-2',
        title: 'Sight Reading Practice',
        desc: 'Reading ahead while playing',
        explanation: [
          'Sight reading is the ability to play written music at first glance. Developing this skill involves reading ahead and recognizing patterns quickly.',
          'Start with simple pieces and keep a steady tempo. Focus on hand position and note patterns rather than perfection on the first attempt.',
          'Use a metronome to maintain rhythm and gradually increase complexity. The goal is to keep going even if mistakes happen, building confidence over time.'
        ],
        videoUrl: 'https://www.youtube.com/embed/SA2rA5T7nSI',
        diagramUrl: `${DIAGRAM_BASE}p-a-2.svg`,
        diagramCaption: 'Sight reading strategies for piano players',
        quiz: [
          {
            question: 'Sight reading means playing:',
            options: ['From memory only', 'At first glance', 'With eyes closed', 'Only familiar songs'],
            answer: 'At first glance'
          },
          {
            question: 'Reading ahead helps with:',
            options: ['Tuning', 'Smooth performance', 'Pedal use', 'Hand size'],
            answer: 'Smooth performance'
          },
          {
            question: 'A metronome supports sight reading by:',
            options: ['Changing keys', 'Maintaining rhythm', 'Tuning notes', 'Replacing fingering'],
            answer: 'Maintaining rhythm'
          },
          {
            question: 'When sight reading, you should:',
            options: ['Stop for mistakes', 'Keep going through mistakes', 'Only play slow', 'Only use one hand'],
            answer: 'Keep going through mistakes'
          }
        ]
      },
      {
        id: 'p-a-3',
        title: 'Chord Progressions',
        desc: 'Building emotional movement',
        explanation: [
          'Chord progressions are a sequence of chords that form the harmonic backbone of a song. Common progressions like I–V–vi–IV are used in many modern pop and ballad arrangements.',
          'Practice the progression in different keys to internalize the sound of each chord movement. Notice how the relationship between chords creates tension and release.',
          'Add a simple melody over the progression to hear how harmony supports the tune. This develops musical understanding and composition skills.'
        ],
        videoUrl: 'https://www.youtube.com/embed/8lqsJeClVyA',
        diagramUrl: `${DIAGRAM_BASE}p-a-3.svg`,
        diagramCaption: 'Chord progression chart for songwriting and practice',
        quiz: [
          {
            question: 'A chord progression is a sequence of:',
            options: ['Scales', 'Chords', 'Single notes', 'Rests'],
            answer: 'Chords'
          },
          {
            question: 'I–V–vi–IV is often used in:',
            options: ['Classical only', 'Modern pop', 'Percussion', 'Jazz solos'],
            answer: 'Modern pop'
          },
          {
            question: 'Progressions create musical:',
            options: ['Silence', 'Tension and release', 'Only rhythm', 'Finger injury'],
            answer: 'Tension and release'
          },
          {
            question: 'Adding melody over chords helps with:',
            options: ['Volume', 'Harmony understanding', 'Tuning', 'String bending'],
            answer: 'Harmony understanding'
          }
        ]
      }
    ]
  },
  drums: {
    beginner: [
      {
        id: 'd-b-1',
        title: 'Drum Kit Overview',
        desc: 'Snare, bass, toms, cymbals',
        explanation: [
          'A basic drum kit includes a bass drum, snare drum, hi-hat, toms, and cymbals. Each component has its own role in creating rhythm and texture.',
          'The snare provides a sharp backbeat, the bass drum gives low-end pulse, and toms add fills and color. Cymbals are used for accents and steady hi-hat patterns.',
          'Understanding each part helps you coordinate all limbs. Start by playing simple beats and identifying the sound of each drum and cymbal.'
        ],
        videoUrl: 'https://www.youtube.com/embed/zIjoCgeRXBQ',
        diagramUrl: `${DIAGRAM_BASE}d-b-1.svg`,
        diagramCaption: 'Basic drum kit layout and component labels',
        quiz: [
          {
            question: 'Which drum provides the low pulse?',
            options: ['Snare', 'Hi-hat', 'Bass drum', 'Tom'],
            answer: 'Bass drum'
          },
          {
            question: 'The snare drum is often used for:',
            options: ['Low beats', 'Backbeat accents', 'Melody', 'Tuning'],
            answer: 'Backbeat accents'
          },
          {
            question: 'Hi-hat cymbals are played with:',
            options: ['Foot only', 'Hands only', 'Hand or foot', 'No sticking'],
            answer: 'Hand or foot'
          },
          {
            question: 'Toms are most commonly used for:',
            options: ['Rhythm maintenance', 'Fills', 'Tuning', 'Guitar parts'],
            answer: 'Fills'
          }
        ]
      },
      {
        id: 'd-b-2',
        title: 'Grip and Stance',
        desc: 'Matched grip fundamentals',
        explanation: [
          'Matched grip uses the same hand position for both sticks, with palms facing down or slightly inward. This grip is comfortable for beginners and offers good control.',
          'Sit with your feet flat on the pedals and back straight. Keep the shoulders relaxed and elbows slightly away from the body for better rebound and endurance.',
          'Hold the sticks loosely enough to allow the natural bounce, but firmly enough to maintain control. This balance keeps your stroke even and reduces tension.'
        ],
        videoUrl: 'https://www.youtube.com/embed/T1AQM_c12Tw',
        diagramUrl: `${DIAGRAM_BASE}d-b-2.svg`,
        diagramCaption: 'Matched grip and ergonomic drumming posture',
        quiz: [
          {
            question: 'Matched grip means both hands hold sticks:',
            options: ['Differently', 'The same', 'Only one hand', 'Not at all'],
            answer: 'The same'
          },
          {
            question: 'Good drum posture includes:',
            options: ['Hunched back', 'Relaxed shoulders', 'Arms high', 'Feet off pedals'],
            answer: 'Relaxed shoulders'
          },
          {
            question: 'A loose grip helps with:',
            options: ['No control', 'Natural bounce', 'Sticking loudly', 'Tight strokes'],
            answer: 'Natural bounce'
          },
          {
            question: 'Feet should be positioned on the:',
            options: ['Hi-hat and bass pedals', 'Floor only', 'Snare rim', 'Cymbals'],
            answer: 'Hi-hat and bass pedals'
          }
        ]
      },
      {
        id: 'd-b-3',
        title: 'Basic Drum Beat',
        desc: 'Kick, snare, hi-hat pattern',
        explanation: [
          'A basic rock beat places the bass drum on beat one and three, the snare on beats two and four, and the hi-hat playing steady eighth notes. This pattern forms the foundation of countless songs.',
          'Start slowly and count out loud while playing. Consistent timing is more important than speed for building a solid groove.',
          'Once you feel comfortable, experiment with slight variations on the bass drum or hi-hat. These small changes can make the beat feel more natural and musical.'
        ],
        videoUrl: 'https://www.youtube.com/embed/WSKl-7pjw-w',
        diagramUrl: `${DIAGRAM_BASE}d-b-3.svg`,
        diagramCaption: 'Basic drum beat notation and limb coordination',
        quiz: [
          {
            question: 'In a simple rock beat, the snare hits on:',
            options: ['1 and 3', '2 and 4', 'All beats', 'Off beats'],
            answer: '2 and 4'
          },
          {
            question: 'The hi-hat often plays:',
            options: ['Whole notes', 'Steady eighth notes', 'No rhythm', 'Only fills'],
            answer: 'Steady eighth notes'
          },
          {
            question: 'Counting out loud helps with:',
            options: ['Tuning drums', 'Timing', 'Grip', 'Sound volume'],
            answer: 'Timing'
          },
          {
            question: 'The bass drum is played with the:',
            options: ['Hand', 'Foot', 'Elbow', 'Head'],
            answer: 'Foot'
          }
        ]
      }
    ],
    intermediate: [
      {
        id: 'd-i-1',
        title: 'Ghost Notes',
        desc: 'Light snare articulations',
        explanation: [
          'Ghost notes are quiet, subtle snare hits that add groove without overpowering the main backbeat. They are often played between the primary snare strokes.',
          'Use a lighter stick motion and softer touch on the drum head. The goal is a faint sound that you feel more than hear as part of the groove.',
          'Combine ghost notes with a steady kick and hi-hat pattern. This creates a more dynamic drum part that supports the music without distracting from it.'
        ],
        videoUrl: 'https://www.youtube.com/embed/9YR_EwHzUF0',
        diagramUrl: `${DIAGRAM_BASE}d-i-1.svg`,
        diagramCaption: 'Ghost note placement within drum grooves',
        quiz: [
          {
            question: 'Ghost notes are played:',
            options: ['Loudly', 'Quietly', 'Only with cymbals', 'Not at all'],
            answer: 'Quietly'
          },
          {
            question: 'Ghost notes usually occur between:',
            options: ['Bass drum hits', 'Primary snare strokes', 'Rests only', 'Toms'],
            answer: 'Primary snare strokes'
          },
          {
            question: 'A ghost note is more about:',
            options: ['Volume', 'Feel', 'Speed', 'Tuning'],
            answer: 'Feel'
          },
          {
            question: 'Proper ghost notes require:',
            options: ['Hard hits', 'Soft touch', 'Blasting cymbals', 'No hi-hat'],
            answer: 'Soft touch'
          }
        ]
      },
      {
        id: 'd-i-2',
        title: 'Rhythm Subdivisions',
        desc: 'Eighths, triplets, sixteenths',
        explanation: [
          'Subdividing a beat means dividing it into equal smaller parts, such as eighth notes, triplets, or sixteenth notes. This adds rhythmic variety to your drumming.',
          'Practice each subdivision slowly with a metronome. Count "1 and 2 and" for eighth notes, "1 trip-let" for triplets, and "1 e and a" for sixteenth notes.',
          'Use these subdivisions in fills and grooves to create movement. Gradually blend them into your basic beat so they feel natural rather than forced.'
        ],
        videoUrl: 'https://www.youtube.com/embed/xxyew6v72W8',
        diagramUrl: `${DIAGRAM_BASE}d-i-2.svg`,
        diagramCaption: 'Drum notation for common rhythm subdivisions',
        quiz: [
          {
            question: 'Eighth notes are counted as:',
            options: ['1 and 2 and', '1 trip-let', '1 e and a', '1 only'],
            answer: '1 and 2 and'
          },
          {
            question: 'Triplets split the beat into:',
            options: ['2 parts', '3 parts', '4 parts', '5 parts'],
            answer: '3 parts'
          },
          {
            question: 'Sixteenth notes are counted as:',
            options: ['1 and', '1 e and a', '1 trip-let', '1 2 3'],
            answer: '1 e and a'
          },
          {
            question: 'Subdivisions add:',
            options: ['Rhythmic variety', 'Louder volume', 'Only tempo changes', 'No benefit'],
            answer: 'Rhythmic variety'
          }
        ]
      },
      {
        id: 'd-i-3',
        title: 'Fills and Transitions',
        desc: 'Connecting song sections',
        explanation: [
          'Drum fills are short rhythmic phrases used to lead from one section of a song to another. They often use toms, snare, and cymbals to signal a change.',
          'Keep fills simple at first, using single strokes or triplet patterns. The goal is to support the music, not draw attention away from it.',
          'Practice ending a fill on the downbeat of the next section. This ensures the band or backing track stays synchronized with your timing.'
        ],
        videoUrl: 'https://www.youtube.com/embed/b4SPX6_kt40',
        diagramUrl: `${DIAGRAM_BASE}d-i-3.svg`,
        diagramCaption: 'Drum fill examples for musical transitions',
        quiz: [
          {
            question: 'A drum fill usually leads into:',
            options: ['The previous section', 'A new section', 'Silence only', 'Tuning'],
            answer: 'A new section'
          },
          {
            question: 'Good fills are typically:',
            options: ['Overly complicated', 'Simple and musical', 'Very loud', 'Only ghost notes'],
            answer: 'Simple and musical'
          },
          {
            question: 'Finishing a fill on the downbeat helps:',
            options: ['Stay in time', 'Change cymbals', 'Tune drums', 'Make it faster'],
            answer: 'Stay in time'
          },
          {
            question: 'Common fill instruments are:',
            options: ['Guitar and bass', 'Toms and snare', 'Piano', 'Vocals'],
            answer: 'Toms and snare'
          }
        ]
      }
    ],
    advanced: [
      {
        id: 'd-a-1',
        title: 'Polyrhythms',
        desc: 'Playing two rhythms together',
        explanation: [
          'Polyrhythms combine two different rhythmic patterns simultaneously, such as three against two. This creates a layered feel that is often heard in jazz and world music.',
          'Start by practicing a simple 3:2 pattern with one hand playing triplets and the other playing straight beats. Focus on feeling how the rhythms align over time.',
          'Once the pattern feels steady, apply it to a groove with the kick, snare, and hi-hat. Polyrhythms develop your sense of timing and independence.'
        ],
        videoUrl: 'https://www.youtube.com/embed/U2p5qieK34U',
        diagramUrl: `${DIAGRAM_BASE}d-a-1.svg`,
        diagramCaption: 'Polyrhythm notation and coordination for drummers',
        quiz: [
          {
            question: 'A 3:2 polyrhythm means one hand plays:',
            options: ['Three beats in the same time as two', 'Two beats in the same time as three', 'Only one beat', 'Four beats'],
            answer: 'Three beats in the same time as two'
          },
          {
            question: 'Polyrhythms are common in:',
            options: ['Classical piano', 'Jazz and world music', 'Simple pop', 'Silence'],
            answer: 'Jazz and world music'
          },
          {
            question: 'Polyrhythms improve:',
            options: ['Tuning', 'Timing and independence', 'Stick weight', 'Kit size'],
            answer: 'Timing and independence'
          },
          {
            question: 'The key to polyrhythms is:',
            options: ['Speed only', 'Steady pulse', 'Loudness', 'Ignoring rhythm'],
            answer: 'Steady pulse'
          }
        ]
      },
      {
        id: 'd-a-2',
        title: 'Brush Technique',
        desc: 'Soft textures for jazz',
        explanation: [
          'Brushes create a soft, swishing sound often used in jazz and ballads. They allow the drummer to accompany quietly while keeping a steady swing feel.',
          'Use circular motions on the snare drum to create the characteristic sound. The tips of the brushes should glide lightly while maintaining contact with the drum head.',
          'Practice basic swing patterns and light accents. Brushes require subtle control, so focus on consistency rather than volume.'
        ],
        videoUrl: 'https://www.youtube.com/embed/omM7hWVR5ZA',
        diagramUrl: `${DIAGRAM_BASE}d-a-2.svg`,
        diagramCaption: 'Brush drumming technique for soft jazz grooves',
        quiz: [
          {
            question: 'Brushes are used for:',
            options: ['Loud rock beats', 'Soft textures', 'Tuning', 'Heavy metal'],
            answer: 'Soft textures'
          },
          {
            question: 'Brush sound is produced by:',
            options: ['Hard hits', 'Circular motion', 'Feet only', 'Strings'],
            answer: 'Circular motion'
          },
          {
            question: 'Brushes are common in which style?',
            options: ['Jazz', 'Death metal', 'Reggae', 'Bluegrass'],
            answer: 'Jazz'
          },
          {
            question: 'Focus when using brushes is on:',
            options: ['Volume', 'Subtle control', 'Fast fills', 'No rhythm'],
            answer: 'Subtle control'
          }
        ]
      },
      {
        id: 'd-a-3',
        title: 'Dynamic Control',
        desc: 'Playing soft to loud with intent',
        explanation: [
          'Dynamic control means adjusting volume and intensity based on the song. Good drummers know when to play softly to support the music and when to push harder for energy.',
          'Practice grooves at different volumes while keeping the same feel. Use light strokes for quieter sections and stronger hits for climaxes without changing timing.',
          'Listen to recordings and match the drummer’s dynamic choices. This skill is essential for musical sensitivity and proper band playing.'
        ],
        videoUrl: 'https://www.youtube.com/embed/2LHCG777ws8',
        diagramUrl: `${DIAGRAM_BASE}d-a-3.svg`,
        diagramCaption: 'Dynamic drumming guide for softer and louder playing',
        quiz: [
          {
            question: 'Dynamic control refers to:',
            options: ['Speed only', 'Volume and intensity', 'Tuning', 'Stick size'],
            answer: 'Volume and intensity'
          },
          {
            question: 'Playing softly while staying in time is:',
            options: ['Easy', 'Musical', 'Not useful', 'Wrong'],
            answer: 'Musical'
          },
          {
            question: 'Stronger hits should be used for:',
            options: ['Climaxes', 'Quiet verses', 'Tuning', 'Skipping beats'],
            answer: 'Climaxes'
          },
          {
            question: 'Listening to recordings helps develop:',
            options: ['Stick selection', 'Dynamic sensitivity', 'Tuning ear', 'Drum size'],
            answer: 'Dynamic sensitivity'
          }
        ]
      }
    ]
  },
  ukulele: {
    beginner: [
      {
        id: 'u-b-1',
        title: 'Ukulele Anatomy',
        desc: 'Body, neck, and tuning',
        explanation: [
          'A ukulele has four strings and a compact body that is easy to hold. The most common tuning is G-C-E-A, which gives the instrument a bright and cheerful sound.',
          'The body amplifies the vibration of nylon strings, and the fretboard is marked with frets to change pitch. The headstock contains tuning pegs that keep each string in tune.',
          'Understanding the instrument’s anatomy makes it simpler to follow chord charts and tablature. Start by identifying the bridge, soundhole, and fret markers on your ukulele.'
        ],
        videoUrl: 'https://www.youtube.com/embed/5bTE5fbxDsc',
        diagramUrl: `${DIAGRAM_BASE}u-b-1.svg`,
        diagramCaption: 'Ukulele parts and standard G-C-E-A tuning',
        quiz: [
          {
            question: 'How many strings does a ukulele have?',
            options: ['3', '4', '5', '6'],
            answer: '4'
          },
          {
            question: 'Standard ukulele tuning is:',
            options: ['E-A-D-G', 'G-C-E-A', 'A-D-G-B', 'C-F-A-D'],
            answer: 'G-C-E-A'
          },
          {
            question: 'Ukulele strings are usually made from:',
            options: ['Metal', 'Nylon', 'Steel', 'Gut only'],
            answer: 'Nylon'
          },
          {
            question: 'The soundhole helps with:',
            options: ['Tuning', 'Amplifying sound', 'Holding the strap', 'String tension'],
            answer: 'Amplifying sound'
          }
        ]
      },
      {
        id: 'u-b-2',
        title: 'First Chords',
        desc: 'C, Am, F, and G',
        explanation: [
          'The first ukulele chords are C, Am, F, and G. These shapes are easy to learn and can play many beginner songs with just four chords.',
          'Place each finger carefully and press the strings firmly against the fretboard. Avoid touching adjacent strings to keep the chords ringing clearly.',
          'Practice switching between chords slowly, then work on common transitions like C to G and F to Am. Familiar chord changes are essential for playing songs smoothly.'
        ],
        videoUrl: 'https://www.youtube.com/embed/-I5op62VCnk',
        diagramUrl: `${DIAGRAM_BASE}u-b-2.svg`,
        diagramCaption: 'Beginner ukulele chord diagrams',
        quiz: [
          {
            question: 'Which chord uses only one finger on the third fret?',
            options: ['Am', 'C', 'F', 'G'],
            answer: 'C'
          },
          {
            question: 'Ukulele chord transitions help with:',
            options: ['Speed only', 'Smooth song playing', 'Tuning', 'Strap placement'],
            answer: 'Smooth song playing'
          },
          {
            question: 'Am chord uses which two strings?',
            options: ['G and C', 'E and A', 'C and E', 'G and A'],
            answer: 'G and C'
          },
          {
            question: 'G chord is played at which fret position?',
            options: ['First fret', 'Second and third fret', 'Fourth fret', 'Open strings only'],
            answer: 'Second and third fret'
          }
        ]
      },
      {
        id: 'u-b-3',
        title: 'Strumming Patterns',
        desc: 'Down-up motion basics',
        explanation: [
          'Ukulele strumming uses a down-up motion with the thumb or a felt pick. Keep your wrist loose and let the strum flow naturally across the strings.',
          'Practice a basic down-down-up-up-down-up pattern to build rhythm. This pattern works well for many ukulele songs and keeps the accompaniment lively.',
          'Maintain a steady beat and accent the first downstroke slightly. Simple variations in volume help the strumming sound more musical.'
        ],
        videoUrl: 'https://www.youtube.com/embed/tkod1S9naw4',
        diagramUrl: `${DIAGRAM_BASE}u-b-3.svg`,
        diagramCaption: 'Ukulele strumming motion and pattern example',
        quiz: [
          {
            question: 'A common ukulele strumming motion is:',
            options: ['Left-right', 'Down-up', 'Circular only', 'Staccato only'],
            answer: 'Down-up'
          },
          {
            question: 'Keeping the wrist loose helps with:',
            options: ['Tuning', 'Fluid strumming', 'Finger picking', 'Hammer-ons'],
            answer: 'Fluid strumming'
          },
          {
            question: 'Accent the first downstroke to:',
            options: ['Keep tempo', 'Add musical feel', 'Make it quieter', 'Ignore rhythm'],
            answer: 'Add musical feel'
          },
          {
            question: 'A common pattern is:',
            options: ['Down-down-up-up-down-up', 'Up-up-down', 'Down only', 'Mute only'],
            answer: 'Down-down-up-up-down-up'
          }
        ]
      }
    ],
    intermediate: [
      {
        id: 'u-i-1',
        title: 'Fingerpicking Basics',
        desc: 'Thumb and fingers separation',
        explanation: [
          'Ukulele fingerpicking uses the thumb for bass strings and the index, middle, and ring fingers for melody notes. This style adds texture to songs without strumming.',
          'Start with a simple pattern like thumb, index, middle, ring. Keep your hand relaxed and pluck the strings with the fingertips or nails for a clear tone.',
          'Practice single-note arpeggios and moving between chord shapes. Fingerpicking opens up more gentle and expressive playing styles on the ukulele.'
        ],
        videoUrl: 'https://www.youtube.com/embed/XDqxdtd2Tr4',
        diagramUrl: `${DIAGRAM_BASE}u-i-1.svg`,
        diagramCaption: 'Ukulele fingerpicking pattern with thumb and fingers',
        quiz: [
          {
            question: 'Fingerpicking uses the thumb for:',
            options: ['High melody', 'Bass strings', 'Chords only', 'No strings'],
            answer: 'Bass strings'
          },
          {
            question: 'A simple pattern is:',
            options: ['Thumb-index-middle-ring', 'Down-up', 'Strum only', 'Mute'],
            answer: 'Thumb-index-middle-ring'
          },
          {
            question: 'Fingerpicking adds:',
            options: ['Texture', 'Loudness only', 'Only rhythm', 'No sound'],
            answer: 'Texture'
          },
          {
            question: 'A relaxed hand helps with:',
            options: ['Nail growth', 'Clear tone', 'Tuning', 'Breaking strings'],
            answer: 'Clear tone'
          }
        ]
      },
      {
        id: 'u-i-2',
        title: 'Chord Variations',
        desc: 'A7, D7, and Bm',
        explanation: [
          'Ukulele chord variations like A7, D7, and Bm add more color and emotion to progressions. These chords are useful for pop, folk, and jazz-influenced songs.',
          'A7 uses an open shape with one finger on the lower E string, while D7 is played with three notes on the second fret. Bm is a small barre shape that introduces more finger strength.',
          'Practice moving between these variations and basic chords. They help build a more interesting accompaniment and expand your chord vocabulary.'
        ],
        videoUrl: 'https://www.youtube.com/embed/Rup9Wg2JXAU',
        diagramUrl: `${DIAGRAM_BASE}u-i-2.svg`,
        diagramCaption: 'Ukulele chord variations for intermediate players',
        quiz: [
          {
            question: 'A7 uses how many fingers?',
            options: ['Zero', 'One', 'Two', 'Three'],
            answer: 'One'
          },
          {
            question: 'D7 is played on which fret?',
            options: ['First fret', 'Second fret', 'Third fret', 'Fourth fret'],
            answer: 'Second fret'
          },
          {
            question: 'Bm introduces which technique?',
            options: ['Barre', 'Open tuning', 'Palm muting', 'Strumming only'],
            answer: 'Barre'
          },
          {
            question: 'Chord variations help make progressions sound:',
            options: ['Less musical', 'More interesting', 'Simpler', 'Louder'],
            answer: 'More interesting'
          }
        ]
      },
      {
        id: 'u-i-3',
        title: 'Melody and Harmony',
        desc: 'Playing single-note lines with chords',
        explanation: [
          'Combining melody and harmony on ukulele means playing a tune while using chord fragments or simple accompaniment. This makes your performance sound fuller and more complete.',
          'Practice a melody on the top strings while holding an implied chord with the lower strings. Keep the melody clear and let the harmony support it gently.',
          'Start with well-known songs and adapt the accompaniment to match the tune. Listening to how the parts fit together is key to this intermediate skill.'
        ],
        videoUrl: 'https://www.youtube.com/embed/BKwB8FmvKHw',
        diagramUrl: `${DIAGRAM_BASE}u-i-3.svg`,
        diagramCaption: 'Ukulele melody and harmony coordination diagram',
        quiz: [
          {
            question: 'Playing melody with harmony makes the ukulele sound:',
            options: ['Thinner', 'Fuller', 'Louder only', 'Wrong'],
            answer: 'Fuller'
          },
          {
            question: 'A melody is usually played on which strings?',
            options: ['Lower strings', 'Top strings', 'All strings equally', 'No strings'],
            answer: 'Top strings'
          },
          {
            question: 'Harmony supports the melody by:',
            options: ['Increasing volume', 'Providing chord tones', 'Speeding up', 'Silencing it'],
            answer: 'Providing chord tones'
          },
          {
            question: 'This skill is best practiced with:',
            options: ['No song', 'A known tune', 'Only scales', 'Only drums'],
            answer: 'A known tune'
          }
        ]
      }
    ],
    advanced: [
      {
        id: 'u-a-1',
        title: 'Percussive Strumming',
        desc: 'Rhythmic slaps and taps',
        explanation: [
          'Percussive strumming adds body to your ukulele playing by incorporating slaps, thumb taps, and muted hits. This creates a rhythmic groove similar to a drum kit.',
          'Use your palm to mute the strings briefly and strike the top of the body for a percussive sound. Combine this with chord changes to keep the rhythm moving.',
          'Practice slow patterns before speeding up, and keep your right hand relaxed. Percussive techniques can transform simple songs into more exciting arrangements.'
        ],
        videoUrl: 'https://www.youtube.com/embed/6OuV51zTce4',
        diagramUrl: `${DIAGRAM_BASE}u-a-1.svg`,
        diagramCaption: 'Percussive ukulele techniques using slaps and taps',
        quiz: [
          {
            question: 'Percussive strumming includes:',
            options: ['Only picks', 'Slaps and taps', 'Open strings only', 'No rhythm'],
            answer: 'Slaps and taps'
          },
          {
            question: 'A percussive sound can be made by:',
            options: ['Palm muting', 'Putting down the uke', 'Changing tuning', 'Only singing'],
            answer: 'Palm muting'
          },
          {
            question: 'Keep the right hand:',
            options: ['Tense', 'Relaxed', 'Stiff', 'Still'],
            answer: 'Relaxed'
          },
          {
            question: 'Percussive techniques add:',
            options: ['Silence', 'Rhythmic groove', 'Only volume', 'No interest'],
            answer: 'Rhythmic groove'
          }
        ]
      },
      {
        id: 'u-a-2',
        title: 'Chord Melody',
        desc: 'Playing tune and harmony together',
        explanation: [
          'Chord melody means playing the melody while simultaneously adding chord tones. This advanced skill makes the ukulele sound rich and expressive like a solo instrument.',
          'Choose melody notes on the top strings and fill in harmony with adjacent chord tones. Use fingerpicking to keep both parts distinct and balanced.',
          'Work on simple tunes first, then gradually add more harmonic detail. Proper voicing ensures the melody remains clear while the harmony supports it.'
        ],
        videoUrl: 'https://www.youtube.com/embed/TAQUz7yfyds',
        diagramUrl: `${DIAGRAM_BASE}u-a-2.svg`,
        diagramCaption: 'Chord melody technique for ukulele solo playing',
        quiz: [
          {
            question: 'Chord melody combines:',
            options: ['Strings and tuning', 'Melody and harmony', 'Drums and bass', 'Volume and tempo'],
            answer: 'Melody and harmony'
          },
          {
            question: 'The melody should sound:',
            options: ['Hidden', 'Clear', 'Muted', 'Louder than the uke'],
            answer: 'Clear'
          },
          {
            question: 'Use fingerpicking to keep parts:',
            options: ['Mixed', 'Distinct', 'Equal only', 'Silent'],
            answer: 'Distinct'
          },
          {
            question: 'Chord melody is best practiced with:',
            options: ['No harmony', 'Simple tunes', 'Heavy distortion', 'Only rhythm'],
            answer: 'Simple tunes'
          }
        ]
      },
      {
        id: 'u-a-3',
        title: 'Advanced Rhythm',
        desc: 'Syncopation and meter changes',
        explanation: [
          'Advanced ukulele rhythm uses syncopation and shifting accents to create more interesting grooves. Syncopation emphasizes off-beats and unexpected weak beats in the pattern.',
          'Practice playing a steady down-up pattern while accenting the "and" counts. This helps you internalize the feel and stay grounded in the meter.',
          'Experiment with changing from 4/4 to 3/4 or adding a measure of rest. These rhythmic changes make songs feel fresh and add musical tension.'
        ],
        videoUrl: 'https://www.youtube.com/embed/O5Tt7ELEOcQ',
        diagramUrl: `${DIAGRAM_BASE}u-a-3.svg`,
        diagramCaption: 'Ukulele syncopation and meter change examples',
        quiz: [
          {
            question: 'Syncopation emphasizes:',
            options: ['Downbeats only', 'Off-beats', 'No beats', 'Only rests'],
            answer: 'Off-beats'
          },
          {
            question: 'Playing accents on the "and" counts helps with:',
            options: ['Tempo', 'Feel', 'Tuning', 'Finger strength'],
            answer: 'Feel'
          },
          {
            question: 'Changing meter from 4/4 to 3/4 creates:',
            options: ['The same feel', 'A waltz-like feel', 'No rhythm', 'A drum roll'],
            answer: 'A waltz-like feel'
          },
          {
            question: 'Advanced rhythm adds:',
            options: ['Monotony', 'Interest and movement', 'Slower tempo only', 'Tuning issues'],
            answer: 'Interest and movement'
          }
        ]
      }
    ]
  },
  violin: {
    beginner: [
      {
        id: 'v-b-1',
        title: 'Instrument Setup',
        desc: 'Bow, bridge, and strings',
        explanation: [
          'A violin consists of a body, bridge, fingerboard, strings, and bow. The bridge supports the strings and transfers vibrations to the body, while the bow produces sound through friction.',
          'Rosin the bow hair before playing so it grips the strings properly. Without rosin, the bow will slip and produce a thin, squeaky sound.',
          'Check the bridge and strings carefully before each session. Proper setup ensures the instrument stays in tune and responds evenly across all four strings.'
        ],
        videoUrl: 'https://www.youtube.com/embed/tty1MswuD78',
        diagramUrl: `${DIAGRAM_BASE}v-b-1.svg`,
        diagramCaption: 'Violin parts and bow setup guide',
        quiz: [
          {
            question: 'The bow produces sound by:',
            options: ['Blowing air', 'Plucking strings', 'Friction on strings', 'Tapping the body'],
            answer: 'Friction on strings'
          },
          {
            question: 'Rosin is applied to:',
            options: ['The violin body', 'The bow hair', 'The strings', 'The bridge'],
            answer: 'The bow hair'
          },
          {
            question: 'The bridge supports:',
            options: ['Only the bow', 'The strings', 'The scroll', 'The chin rest'],
            answer: 'The strings'
          },
          {
            question: 'A properly set up violin helps with:',
            options: ['Only volume', 'Tuning and response', 'Finger pain', 'Only bow speed'],
            answer: 'Tuning and response'
          }
        ]
      },
      {
        id: 'v-b-2',
        title: 'Holding the Violin',
        desc: 'Chin rest and left hand',
        explanation: [
          'Hold the violin on your left shoulder with the chin on the chin rest. The instrument should feel supported by your jaw and shoulder without forcing tension in the neck.',
          'The left hand fingers should curve over the fingerboard, with the thumb resting lightly behind the neck. This allows precise intonation and easy shifting.',
          'Keep the right hand and wrist relaxed while holding the bow. Good posture prevents fatigue and improves control during longer practice sessions.'
        ],
        videoUrl: 'https://www.youtube.com/embed/K4SbVKA5JHw',
        diagramUrl: `${DIAGRAM_BASE}v-b-2.svg`,
        diagramCaption: 'Violin holding position with chin rest and hand placement',
        quiz: [
          {
            question: 'The chin rest supports the violin on the:',
            options: ['Right shoulder', 'Left shoulder', 'Chest', 'Head'],
            answer: 'Left shoulder'
          },
          {
            question: 'Left hand fingers should be:',
            options: ['Straight', 'Curved', 'Flat', 'Tucked'],
            answer: 'Curved'
          },
          {
            question: 'Relaxed posture helps prevent:',
            options: ['Fatigue', 'Music reading', 'Tuning', 'Wrong notes'],
            answer: 'Fatigue'
          },
          {
            question: 'The bow should be held with:',
            options: ['A tight grip', 'A relaxed hand', 'Both hands', 'No grip'],
            answer: 'A relaxed hand'
          }
        ]
      },
      {
        id: 'v-b-3',
        title: 'First Notes',
        desc: 'Open strings and simple finger patterns',
        explanation: [
          'Begin with open strings G, D, A, and E to hear the pure pitch of each string. Open strings are the foundation for tuning and simple melodies.',
          'Next, place your first finger on each string to play notes a whole step above the open string. This introduces the concept of finger placement with consistent spacing.',
          'Practice simple patterns on one string at a time, listening carefully to pitch changes. Developing a good ear early makes intonation easier later on.'
        ],
        videoUrl: 'https://www.youtube.com/embed/GYSqIXuTnjM',
        diagramUrl: `${DIAGRAM_BASE}v-b-3.svg`,
        diagramCaption: 'Violin open string and first finger positions',
        quiz: [
          {
            question: 'The four open violin strings are:',
            options: ['D G B E', 'G D A E', 'A E B F', 'C F A D'],
            answer: 'G D A E'
          },
          {
            question: 'First finger on the D string sounds:',
            options: ['E', 'A', 'C', 'G'],
            answer: 'E'
          },
          {
            question: 'Open strings help with:',
            options: ['Tuning and tone', 'Only sight reading', 'Bow cleaning', 'String replacement'],
            answer: 'Tuning and tone'
          },
          {
            question: 'Good intonation depends on:',
            options: ['Bow speed only', 'Finger placement', 'String color', 'Shoulder rest'],
            answer: 'Finger placement'
          }
        ]
      }
    ],
    intermediate: [
      {
        id: 'v-i-1',
        title: 'Bowing Technique',
        desc: 'Straight bow strokes',
        explanation: [
          'Straight bow strokes keep the bow parallel to the bridge, producing a clear and even tone. Practice moving the bow in a straight line from the frog to the tip.',
          'Use the whole bow length slowly to feel the contact point between the hair and string. This helps you understand how pressure and speed affect the sound.',
          'Maintain a relaxed wrist and arm while bowing. Tension in the arm can create a scratchy tone, while fluid motion results in smoother sound.'
        ],
        videoUrl: 'https://www.youtube.com/embed/D4OOD2Z0c4U',
        diagramUrl: `${DIAGRAM_BASE}v-i-1.svg`,
        diagramCaption: 'Straight bowing mechanics for consistent violin tone',
        quiz: [
          {
            question: 'Straight bow strokes should be:',
            options: ['Curved', 'Parallel to the bridge', 'Diagonal only', 'Random'],
            answer: 'Parallel to the bridge'
          },
          {
            question: 'Bow speed affects:',
            options: ['Pitch', 'Tone and volume', 'Fingering', 'String length'],
            answer: 'Tone and volume'
          },
          {
            question: 'A relaxed wrist helps produce:',
            options: ['Scratchy tone', 'Smooth sound', 'No sound', 'Only loud volume'],
            answer: 'Smooth sound'
          },
          {
            question: 'Moving the bow from frog to tip practices:',
            options: ['Short strokes only', 'Full bow control', 'Tuning', 'Finger placement'],
            answer: 'Full bow control'
          }
        ]
      },
      {
        id: 'v-i-2',
        title: 'First Position Scales',
        desc: 'D major and A major',
        explanation: [
          'First position scales use the first four fingers on each string and are a core part of violin technique. D major and A major are common scales for beginner players.',
          'Practice slowly with a metronome, paying attention to finger placement and intonation. Use the same rhythm on each note for consistency.',
          'Scales build finger strength and train your ear to recognize correct pitch. They also make shifting to higher positions easier later on.'
        ],
        videoUrl: 'https://www.youtube.com/embed/vlHpWvsW040',
        diagramUrl: `${DIAGRAM_BASE}v-i-2.svg`,
        diagramCaption: 'Violin first position scale finger placement',
        quiz: [
          {
            question: 'D major scale begins on which open string?',
            options: ['G', 'D', 'A', 'E'],
            answer: 'D'
          },
          {
            question: 'A major scale uses which sharp?',
            options: ['F#', 'C#', 'G#', 'D#'],
            answer: 'F#'
          },
          {
            question: 'Practicing scales improves:',
            options: ['Tuning only', 'Intonation and strength', 'Bow hair', 'Chin rest'],
            answer: 'Intonation and strength'
          },
          {
            question: 'First position means using which area?',
            options: ['Upper half of neck', 'Near the nut', 'Halfway up the neck', 'Near the bridge'],
            answer: 'Near the nut'
          }
        ]
      },
      {
        id: 'v-i-3',
        title: 'Simple Etudes',
        desc: 'Practice pieces with rhythm',
        explanation: [
          'Etudes are short studies designed to develop technique. Simple etudes combine note reading, rhythm, and bow control in a musical context.',
          'Choose an etude with a slow tempo and clear fingerings. Play it slowly first, then gradually build up speed while keeping the sound even.',
          'Pay attention to dynamics and phrasing. Even basic exercises can sound musical when played with care and intention.'
        ],
        videoUrl: 'https://www.youtube.com/embed/954xC5JrTrU',
        diagramUrl: `${DIAGRAM_BASE}v-i-3.svg`,
        diagramCaption: 'Violin etude practice for technique and musicality',
        quiz: [
          {
            question: 'An etude is a:',
            options: ['Song with lyrics', 'Practice piece', 'Tuning method', 'Type of bow'],
            answer: 'Practice piece'
          },
          {
            question: 'Etudes help develop:',
            options: ['Only speed', 'Technique and rhythm', 'Only posture', 'String type'],
            answer: 'Technique and rhythm'
          },
          {
            question: 'Playing an etude musically means using:',
            options: ['Dynamics and phrasing', 'No dynamics', 'Only tempo', 'Only loudness'],
            answer: 'Dynamics and phrasing'
          },
          {
            question: 'Start etudes at a tempo that is:',
            options: ['Too fast', 'Comfortable and slow', 'Too slow always', 'Random'],
            answer: 'Comfortable and slow'
          }
        ]
      }
    ],
    advanced: [
      {
        id: 'v-a-1',
        title: 'Position Shifts',
        desc: 'Moving up the fingerboard',
        explanation: [
          'Shifting positions lets you access higher notes and more expressive phrasing. Start with a simple shift from first to third position on one string.',
          'Keep your hand relaxed and slide the wrist smoothly along the neck. Look for the finger spacing to remain consistent when you land in the new position.',
          'Practice shifting slowly, using a reference note before and after the move. This builds confidence and avoids sudden changes in intonation.'
        ],
        videoUrl: 'https://www.youtube.com/embed/GN4JK71eALg',
        diagramUrl: `${DIAGRAM_BASE}v-a-1.svg`,
        diagramCaption: 'Violin position shift guide for ascending the fingerboard',
        quiz: [
          {
            question: 'Position shifting allows access to:',
            options: ['Lower notes only', 'Higher notes', 'Louder volume', 'No notes'],
            answer: 'Higher notes'
          },
          {
            question: 'A smooth shift requires:',
            options: ['Tension', 'Relaxed wrist', 'Fast tempo', 'Only open strings'],
            answer: 'Relaxed wrist'
          },
          {
            question: 'Use a reference note to:',
            options: ['Tune before shifting', 'Check intonation', 'Change bow hand', 'Stop playing'],
            answer: 'Check intonation'
          },
          {
            question: 'Third position is:',
            options: ['Near the nut', 'Higher up the fingerboard', 'On the bridge', 'Below the nut'],
            answer: 'Higher up the fingerboard'
          }
        ]
      },
      {
        id: 'v-a-2',
        title: 'Vibrato Introduction',
        desc: 'Wrist movement for warmth',
        explanation: [
          'Vibrato adds warmth and expressiveness to sustained notes. It is created by a small oscillation in the wrist or finger while holding a note on the fingerboard.',
          'Start with a slow, controlled motion and keep the finger pressed down. The movement should come from the arm and wrist rather than from the fingers alone.',
          'Practice vibrato on one note first, then apply it to longer phrases. A steady, even vibrato enhances the musical line without overpowering it.'
        ],
        videoUrl: 'https://www.youtube.com/embed/ccB251rd8uo',
        diagramUrl: `${DIAGRAM_BASE}v-a-2.svg`,
        diagramCaption: 'Violin vibrato technique with wrist motion',
        quiz: [
          {
            question: 'Vibrato provides:',
            options: ['A louder sound', 'Warmth and expression', 'Faster notes only', 'No change'],
            answer: 'Warmth and expression'
          },
          {
            question: 'Vibrato movement comes from:',
            options: ['Wrist and arm', 'Fingers only', 'Bow hand', 'Shoulders'],
            answer: 'Wrist and arm'
          },
          {
            question: 'A controlled vibrato should be:',
            options: ['Wild', 'Steady', 'Absent', 'Very fast always'],
            answer: 'Steady'
          },
          {
            question: 'Apply vibrato to:',
            options: ['Short staccato notes', 'Sustained notes', 'Only open strings', 'Only rests'],
            answer: 'Sustained notes'
          }
        ]
      },
      {
        id: 'v-a-3',
        title: 'Phrasing and Expression',
        desc: 'Shaping musical lines',
        explanation: [
          'Phrasing on violin means shaping a melody with dynamics, length, and emphasis. Think of each phrase as a musical sentence with a beginning, middle, and end.',
          'Use dynamics to highlight important notes and breathe naturally between phrases. This makes the music feel more communicative and less mechanical.',
          'Pay attention to the contour of the melody and the emotional direction of the phrase. Expressive playing brings the piece to life beyond the written notes.'
        ],
        videoUrl: 'https://www.youtube.com/embed/tQDx2FlfAZY',
        diagramUrl: `${DIAGRAM_BASE}v-a-3.svg`,
        diagramCaption: 'Violin phrasing and expressive playing guide',
        quiz: [
          {
            question: 'Musical phrasing is like:',
            options: ['A sentence', 'A single note', 'A tuning method', 'A drum beat'],
            answer: 'A sentence'
          },
          {
            question: 'Dynamics help make phrases sound:',
            options: ['Flat', 'Expressive', 'Random', 'Wrong'],
            answer: 'Expressive'
          },
          {
            question: 'Natural breathing between phrases improves:',
            options: ['Intonation', 'Phrasing flow', 'Finger speed', 'Bow tension'],
            answer: 'Phrasing flow'
          },
          {
            question: 'Expressive playing focuses on:',
            options: ['Only speed', 'Emotion and shape', 'Only volume', 'Ignoring the music'],
            answer: 'Emotion and shape'
          }
        ]
      }
    ]
  },
  bass: {
    beginner: [
      {
        id: 'b-b-1',
        title: 'Bass Essentials',
        desc: 'Strings, neck, and body',
        explanation: [
          'A bass guitar typically has four strings tuned E-A-D-G. Its longer neck and thicker strings produce low frequencies that form the foundation of a band’s sound.',
          'The body and pickups capture string vibration and send it to an amplifier. The neck supports the fretboard where the notes are fretted.',
          'Proper bass setup and tuning are essential for clean low-end tone. Check the action and intonation regularly to ensure each note rings clearly.'
        ],
        videoUrl: 'https://www.youtube.com/embed/7anFuDXV2j8',
        diagramUrl: `${DIAGRAM_BASE}b-b-1.svg`,
        diagramCaption: 'Bass guitar anatomy with strings and pickup layout',
        quiz: [
          {
            question: 'Standard bass tuning is:',
            options: ['E-A-D-G', 'A-D-G-B', 'C-F-A-D', 'G-C-E-A'],
            answer: 'E-A-D-G'
          },
          {
            question: 'Bass strings are typically:',
            options: ['Thin and bright', 'Thick and low', 'Nylon only', 'Not tuned'],
            answer: 'Thick and low'
          },
          {
            question: 'Pickups capture vibration from the:',
            options: ['Neck', 'Strings', 'Body', 'Bridge'],
            answer: 'Strings'
          },
          {
            question: 'Good bass tone depends on:',
            options: ['Tuning and action', 'Only volume', 'Only speed', 'Only picks'],
            answer: 'Tuning and action'
          }
        ]
      },
      {
        id: 'b-b-2',
        title: 'Fingerstyle Basics',
        desc: 'Steady thumb and fingers',
        explanation: [
          'Fingerstyle bass uses the index and middle fingers to pluck notes while the thumb rests on a pickup or lower string. This technique creates a consistent and controlled sound.',
          'Keep your wrist flat and let the fingers move in a relaxed, alternating motion. Avoid gripping the strings too tightly to maintain smoothness.',
          'Practice simple one-string patterns and focus on connecting notes evenly. This builds the foundation for groove and timing.'
        ],
        videoUrl: 'https://www.youtube.com/embed/xyRQfqaSaOc',
        diagramUrl: `${DIAGRAM_BASE}b-b-2.svg`,
        diagramCaption: 'Bass fingerstyle technique with alternating fingers',
        quiz: [
          {
            question: 'Fingerstyle bass usually uses which fingers?',
            options: ['Thumb and ring', 'Index and middle', 'Pinky only', 'All fingers equally'],
            answer: 'Index and middle'
          },
          {
            question: 'A relaxed wrist helps with:',
            options: ['Drum playing', 'Smooth plucking', 'Tuner use', 'String changing'],
            answer: 'Smooth plucking'
          },
          {
            question: 'The thumb often rests on the:',
            options: ['G string', 'Pickup or lower string', 'Headstock', 'Bridge'],
            answer: 'Pickup or lower string'
          },
          {
            question: 'Even note connection is important for:',
            options: ['Noise', 'Groove', 'Tuning', 'Volume peaks'],
            answer: 'Groove'
          }
        ]
      },
      {
        id: 'b-b-3',
        title: 'Root Notes and Arpeggios',
        desc: 'Locking in with the band',
        explanation: [
          'Root notes are the foundation of a chord and are often the main notes bass players play in a groove. Playing root notes clearly locks the bass with the harmony.',
          'Arpeggios build on root notes by adding other chord tones like the third and fifth. This gives the bass line more movement while still supporting the harmony.',
          'Practice root note patterns with common progressions such as I-IV-V. This makes it easier to follow changes and keep the band together rhythmically.'
        ],
        videoUrl: 'https://www.youtube.com/embed/Q-y7lh9rviE',
        diagramUrl: `${DIAGRAM_BASE}b-b-3.svg`,
        diagramCaption: 'Bass root note and arpeggio patterns for groove',
        quiz: [
          {
            question: 'The root note is usually the note of the:',
            options: ['Chord name', 'Scale degree 2', 'Diminished chord', 'Beat only'],
            answer: 'Chord name'
          },
          {
            question: 'An arpeggio plays chord tones:',
            options: ['Simultaneously', 'Sequentially', 'Not at all', 'Only root notes'],
            answer: 'Sequentially'
          },
          {
            question: 'Common progressions help with:',
            options: ['Only solos', 'Following harmony', 'Tuning only', 'String replacement'],
            answer: 'Following harmony'
          },
          {
            question: 'Locking in with the band requires:',
            options: ['Rhythm and pitch', 'Only speed', 'Only volume', 'No listening'],
            answer: 'Rhythm and pitch'
          }
        ]
      }
    ],
    intermediate: [
      {
        id: 'b-i-1',
        title: 'Walking Bass Lines',
        desc: 'Connecting chords smoothly',
        explanation: [
          'Walking bass lines move stepwise through chord tones and passing notes. They provide motion and help connect harmony in jazz, blues, and swing styles.',
          'Start with the root and fifth of each chord, then add passing notes between changes. This creates a melodic line that still supports the chords.',
          'Keep a steady quarter-note pulse and listen to the chord progression beneath you. The walking line should feel natural and guide the harmony forward.'
        ],
        videoUrl: 'https://www.youtube.com/embed/uIywVZABmeI',
        diagramUrl: `${DIAGRAM_BASE}b-i-1.svg`,
        diagramCaption: 'Walking bass line examples for jazz and blues',
        quiz: [
          {
            question: 'A walking bass line typically moves by:',
            options: ['Large leaps only', 'Stepwise motion', 'Random notes', 'Open strings only'],
            answer: 'Stepwise motion'
          },
          {
            question: 'Passing notes connect:',
            options: ['Chords smoothly', 'Tuning pegs', 'Strings only', 'Only rests'],
            answer: 'Chords smoothly'
          },
          {
            question: 'A steady pulse for walking bass is usually:',
            options: ['Quarter notes', 'Whole notes', 'Sixteenth notes', 'Triplets only'],
            answer: 'Quarter notes'
          },
          {
            question: 'Walking bass lines are common in:',
            options: ['Jazz and blues', 'Heavy metal', 'Electronic dance', 'Classical piano'],
            answer: 'Jazz and blues'
          }
        ]
      },
      {
        id: 'b-i-2',
        title: 'Slap and Pop',
        desc: 'Percussive bass techniques',
        explanation: [
          'Slap bass uses the thumb to strike the string, while popping uses the fingers to pull and release the string. Together they create a percussive and funky sound.',
          'Start with the thumb slap on the lower strings and a controlled pop on the higher strings. Keep the movements precise and rhythmic.',
          'Practice basic slap-pop patterns slowly to build timing. These techniques add energy and a distinctive groove to bass lines.'
        ],
        videoUrl: 'https://www.youtube.com/embed/EAv-au0EXCc',
        diagramUrl: `${DIAGRAM_BASE}b-i-2.svg`,
        diagramCaption: 'Slap and pop bass technique illustrations',
        quiz: [
          {
            question: 'Slap bass uses the thumb to:',
            options: ['Pluck the string', 'Strike the string', 'Mute the string', 'Replace the finger'],
            answer: 'Strike the string'
          },
          {
            question: 'Pop technique uses:',
            options: ['Pinky only', 'Finger pull and release', 'Bow', 'Pick'],
            answer: 'Finger pull and release'
          },
          {
            question: 'These techniques are often used in:',
            options: ['Funk', 'Classical', 'Acapella', 'Orchestral'],
            answer: 'Funk'
          },
          {
            question: 'Precise timing is important for:',
            options: ['Slap and pop', 'Open tuning', 'Only reading', 'No sound'],
            answer: 'Slap and pop'
          }
        ]
      },
      {
        id: 'b-i-3',
        title: 'Syncopated Grooves',
        desc: 'Accents off the beat',
        explanation: [
          'Syncopation accents notes that fall between the main beats. This creates a more interesting groove and adds a sense of movement to the bass line.',
          'Practice playing on the off-beats while keeping a strong underlying pulse. The contrast between strong beats and syncopated notes gives the line momentum.',
          'Use simple patterns first and gradually add more complex syncopated rhythms. This skill makes your bass playing feel more musical and less predictable.'
        ],
        videoUrl: 'https://www.youtube.com/embed/-6FDv8H16iU',
        diagramUrl: `${DIAGRAM_BASE}b-i-3.svg`,
        diagramCaption: 'Syncopated bass groove notation and accent placement',
        quiz: [
          {
            question: 'Syncopation emphasizes:',
            options: ['Only downbeats', 'Off-beats', 'No beats', 'Only rests'],
            answer: 'Off-beats'
          },
          {
            question: 'A strong pulse under syncopation is important for:',
            options: ['Keeping groove', 'Changing tuning', 'Louder volume', 'Only speed'],
            answer: 'Keeping groove'
          },
          {
            question: 'Syncopated grooves feel more:',
            options: ['Predictable', 'Dynamic', 'Silent', 'Wrong'],
            answer: 'Dynamic'
          },
          {
            question: 'Start syncopation practice with:',
            options: ['Complex rhythms', 'Simple patterns', 'No metronome', 'Only chords'],
            answer: 'Simple patterns'
          }
        ]
      }
    ],
    advanced: [
      {
        id: 'b-a-1',
        title: 'Walking Jazz Lines',
        desc: 'Chromatic approaches and guide tones',
        explanation: [
          'Jazz walking bass lines use root movement, chromatic passing notes, and guide tones to outline chord changes. These lines support harmony while keeping the rhythm moving.',
          'Practice a ii-V-I progression with chromatic approach notes to connect chords smoothly. Guide tones such as thirds and sevenths help define the harmony clearly.',
          'Focus on a steady quarter-note pulse and allow the chromatic notes to lead naturally into the next chord. This creates a sophisticated and swinging bass line.'
        ],
        videoUrl: 'https://www.youtube.com/embed/3H13FYddN28',
        diagramUrl: `${DIAGRAM_BASE}b-a-1.svg`,
        diagramCaption: 'Jazz walking bass line construction with chromatic approach notes',
        quiz: [
          {
            question: 'A walking jazz line typically uses:',
            options: ['Only roots', 'Quarter notes and passing tones', 'Only eighth notes', 'Only whole notes'],
            answer: 'Quarter notes and passing tones'
          },
          {
            question: 'Guide tones are usually:',
            options: ['Roots and fifths', 'Thirds and sevenths', 'Only seconds', 'Only fourths'],
            answer: 'Thirds and sevenths'
          },
          {
            question: 'Chromatic notes connect chords by moving:',
            options: ['Diagonally', 'Stepwise', 'Randomly', 'Only downward'],
            answer: 'Stepwise'
          },
          {
            question: 'A steady pulse is important for:',
            options: ['Tempo consistency', 'Only volume', 'Tuning', 'Only speed'],
            answer: 'Tempo consistency'
          }
        ]
      },
      {
        id: 'b-a-2',
        title: 'Slap with Pop Variations',
        desc: 'Advanced funk patterns',
        explanation: [
          'Advanced slap bass uses ghosted notes, muted strums, and syncopation to create grooves with more complexity. These variations give funk and pop lines more character.',
          'Practice ghost notes between slaps and pops to keep the groove tight. Use the palm of the right hand to lightly mute the strings for a percussive sound.',
          'Learn patterns that combine muted hits with open note accents. These techniques produce a rhythmic bass line that is both melodic and danceable.'
        ],
        videoUrl: 'https://www.youtube.com/embed/Yjjz_c0FINE',
        diagramUrl: `${DIAGRAM_BASE}b-a-2.svg`,
        diagramCaption: 'Advanced slap bass patterns with ghost notes and muted rhythms',
        quiz: [
            {
            question: 'Ghost notes in slap bass are:',
            options: ['Loud', 'Quiet and muted', 'Only on the G string', 'Not used'],
            answer: 'Quiet and muted'
          },
          {
            question: 'Muted strums create a:',
            options: ['Percussive sound', 'Loud sustain', 'Harmonic tone', 'No sound'],
            answer: 'Percussive sound'
          },
          {
            question: 'Advanced slap patterns are common in:',
            options: ['Jazz ballads', 'Funk', 'Classical', 'Orchestral'],
            answer: 'Funk'
          },
          {
            question: 'Combining muting and accents improves:',
            options: ['Tuning', 'Groove', 'Fretboard length', 'Only speed'],
            answer: 'Groove'
          }
        ]
      },
      {
        id: 'b-a-3',
        title: 'Tone Sculpting',
        desc: 'EQ, thumb position, and dynamics',
        explanation: [
          'Tone sculpting on bass involves EQ settings, hand position, and dynamic control. Changing where your thumb strikes the string alters the brightness and attack of each note.',
          'Pluck closer to the bridge for a punchy sound and closer to the neck for a rounder tone. Adjust your amplifier EQ to balance bass, mids, and treble for the style you want.',
          'Use dynamics to shape phrases, playing some notes stronger and others softer. This keeps your bass line expressive and helps it sit well in the mix.'
        ],
        videoUrl: 'https://www.youtube.com/embed/k4eeqBoWGuY',
        diagramUrl: `${DIAGRAM_BASE}b-a-3.svg`,
        diagramCaption: 'Bass tone shaping with hand position and EQ control',
        quiz: [
          {
            question: 'Plucking near the bridge gives a sound that is:',
            options: ['Round', 'Punchy', 'Muffled', 'Dull'],
            answer: 'Punchy'
          },
          {
            question: 'Adjusting amplifier EQ changes:',
            options: ['Finger size', 'Tone balance', 'String length', 'Instrument type'],
            answer: 'Tone balance'
          },
          {
            question: 'Dynamics on bass help make lines sound:',
            options: ['Flat', 'Expressive', 'Random', 'Wrong'],
            answer: 'Expressive'
          },
            {
            question: 'Playing closer to the neck produces a:',
            options: ['Brighter tone', 'Rounder tone', 'No sound', 'More distortion'],
            answer: 'Rounder tone'
          }
        ]
      }
    ]
  }
};

export const RESOURCES = [
  { title: 'JustinGuitar — Free Guitar Course', type: 'article', instrument: 'guitar', tier: 'beginner', url: 'https://www.justinguitar.com' },
  { title: 'GuitarLessons365Plus — Acoustic Guitar Tips', type: 'video', instrument: 'guitar', tier: 'intermediate', url: 'https://www.youtube.com/user/GuitarLessons365' },
  { title: 'Fender Play Chord Guide', type: 'diagram', instrument: 'guitar', tier: 'beginner', url: 'https://www.fender.com/learn/play' },
  { title: 'Pianote — Piano Basics', type: 'article', instrument: 'piano', tier: 'beginner', url: 'https://www.pianote.com' },
  { title: 'Hoffman Academy — Piano Lessons', type: 'video', instrument: 'piano', tier: 'beginner', url: 'https://www.youtube.com/user/hoffmanacademy' },
  { title: 'MusicNotes — Piano Chord Charts', type: 'diagram', instrument: 'piano', tier: 'intermediate', url: 'https://www.musicnotes.com' },
  { title: 'Drumeo — Beginner Drum Tutorials', type: 'video', instrument: 'drums', tier: 'beginner', url: 'https://www.youtube.com/@DrumeoOfficial' },
  { title: 'Vic Firth — Drum Rudiments', type: 'article', instrument: 'drums', tier: 'beginner', url: 'https://www.vicfirth.com/education/' },
  { title: 'Drumbeat Academy — Groove Diagrams', type: 'diagram', instrument: 'drums', tier: 'intermediate', url: 'https://www.drumbeatacademy.com' },
  { title: 'Ukulele Underground — Beginner Lessons', type: 'video', instrument: 'ukulele', tier: 'beginner', url: 'https://www.youtube.com/user/UkuleleUnderground' },
  { title: 'Ukulele Tricks — Chord Charts', type: 'article', instrument: 'ukulele', tier: 'intermediate', url: 'https://www.ukuleletricks.com' },
  { title: 'GCEA Tuner & Diagram', type: 'diagram', instrument: 'ukulele', tier: 'beginner', url: 'https://www.ukuleletricks.com/ukulele-chords' },
  { title: 'Violin Lab — Beginner Violin Lessons', type: 'video', instrument: 'violin', tier: 'beginner', url: 'https://www.youtube.com/user/ViolinLab' },
  { title: 'The Online Piano and Violin Tutor', type: 'article', instrument: 'violin', tier: 'intermediate', url: 'https://www.onlinepianist.com/violin' },
  { title: 'Violin Fingering Chart', type: 'diagram', instrument: 'violin', tier: 'beginner', url: 'https://www.free-scores.com' },
  { title: 'TalkingBass — Bass Lessons', type: 'article', instrument: 'bass', tier: 'beginner', url: 'https://www.talkingbass.net' },
  { title: 'Scott’s Bass Lessons', type: 'video', instrument: 'bass', tier: 'intermediate', url: 'https://www.youtube.com/@devinebass' },
  { title: 'Bass Guitar Scale Diagrams', type: 'diagram', instrument: 'bass', tier: 'intermediate', url: 'https://www.bassguitarlessonsonline.com' }
];
