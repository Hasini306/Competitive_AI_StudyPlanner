const fs = require('fs');
const path = require('path');

const topics = [
  "Sets", "Relations and Functions", "Quadratic Equations",
  "Sequences and Series", "Permutations and Combinations",
  "Binomial Theorem", "Straight Lines", "Circles", "Limits",
  "Continuity and Differentiability", "Application of Derivatives",
  "Matrices", "Determinants", "Probability", "Statistics"
];

const specificData = {
  "Relations and Functions": {
    formulas: [
      "n(A x B) = n(A) * n(B)",
      "(f o g)(x) = f(g(x))",
      "f(x) = y => f^-1(y) = x"
    ],
    theory: [
      "A relation from A to B is a subset of A x B.",
      "A function is a relation where each input has a unique output.",
      "Domain is the set of all possible inputs; Range is the set of actual outputs.",
      "A function is bijective if it is both one-to-one (injective) and onto (surjective)."
    ],
    importantNotes: [
      "Always check if the denominator can be 0 when finding the domain.",
      "For inverse functions, the function must be bijective.",
      "Composition of functions is generally NOT commutative: f(g(x)) != g(f(x))."
    ],
    keyConcepts: [
      "Equivalence Relation: Must be reflexive, symmetric, and transitive.",
      "Even Function: f(-x) = f(x). Symmetric about y-axis.",
      "Odd Function: f(-x) = -f(x). Symmetric about origin."
    ],
    shortcuts: [
      "If a graph passes the horizontal line test, the function is one-to-one."
    ],
    examples: [
      "Example: If f(x) = 2x + 3, find its inverse. Answer: f^-1(x) = (x - 3) / 2"
    ]
  },
  "Matrices": {
    formulas: [
      "A^T = transpose of A",
      "If A is orthogonal, A * A^T = I",
      "Trace(A) = sum of diagonal elements"
    ],
    theory: [
      "A matrix is a rectangular array of numbers arranged in rows and columns.",
      "Order of matrix is defined as row x column (m x n).",
      "Matrix multiplication is only possible if columns of A match rows of B."
    ],
    importantNotes: [
      "AB != BA in general matrix multiplication.",
      "Inverse exists only for non-singular matrices (|A| != 0).",
      "Identity matrix I acts as 1: AI = IA = A."
    ],
    keyConcepts: [
      "Symmetric Matrix: A = A^T",
      "Skew-Symmetric Matrix: A = -A^T",
      "Diagonal Matrix: all non-diagonal elements are 0."
    ],
    shortcuts: [
      "For a 2x2 matrix [a b; c d], inverse is (1/(ad-bc)) * [d -b; -c a]."
    ],
    examples: [
      "If A = [1 2; 3 4], A^T = [1 3; 2 4]."
    ]
  }
};

let materialsDb = {};

topics.forEach(topic => {
  if (specificData[topic]) {
    materialsDb[topic] = {
      examType: "JEE",
      subject: "Mathematics",
      topic: topic,
      content: specificData[topic]
    };
  } else {
    // Math templates
    materialsDb[topic] = {
      examType: "JEE",
      subject: "Mathematics",
      topic: topic,
      content: {
        formulas: [
          `Key formula for ${topic} derivations.`,
          `Standard limit/boundary equation for ${topic}.`
        ],
        theory: [
          `${topic} plays a central foundational role in higher mathematics.`,
          `It defines bounds, interactions, and discrete values across mapping spaces.`
        ],
        importantNotes: [
          `Pay strict attention to boundary conditions when solving ${topic}.`,
          `Check for negative roots.`,
          `Do not ignore the complex parts of ${topic} expansions.`
        ],
        keyConcepts: [
          `Fundamental theorem of ${topic}.`,
          `Transformation properties and invariance.`
        ],
        shortcuts: [
          `Memorize standard forms for faster evaluation of ${topic}.`
        ],
        examples: [
          `Example problem solving framework for ${topic} - apply formula carefully.`
        ]
      }
    };
  }
});

fs.writeFileSync(path.join(__dirname, 'topicMaterials.js'), 'const topicMaterials = ' + JSON.stringify(materialsDb, null, 2) + ';\n\nmodule.exports = topicMaterials;');
console.log("Materials file created!");
