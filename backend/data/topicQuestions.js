const questionBank = {
  "Sets": {
    "taskQuestions": [
      {
        "questionText": "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∪ B?",
        "options": [
          "{1, 2, 3, 4}",
          "{2, 3}",
          "{1, 4}",
          "{1, 2, 3, 4, 5}"
        ],
        "correctAnswer": "{1, 2, 3, 4}",
        "explanation": "The union involves all elements in A or B."
      },
      {
        "questionText": "If A = {a, b, c} and B = {b, c, d}, what is A ∩ B?",
        "options": [
          "{a, d}",
          "{b, c}",
          "{a, b, c, d}",
          "Empty set"
        ],
        "correctAnswer": "{b, c}",
        "explanation": "The intersection contains common elements."
      },
      {
        "questionText": "What is the subset of universal set U={1,2,3,4} if A={1,2}?",
        "options": [
          "{1,2}",
          "{3,4}",
          "{1}",
          "{2}"
        ],
        "correctAnswer": "{1,2}",
        "explanation": "A is itself a subset of U."
      },
      {
        "questionText": "If n(A) = 3 and n(B) = 4, what is the maximum number of elements in A ∪ B?",
        "options": [
          "3",
          "4",
          "7",
          "12"
        ],
        "correctAnswer": "7",
        "explanation": "Max elements when disjoint."
      },
      {
        "questionText": "What is the complement of a universal set?",
        "options": [
          "Subset",
          "Superset",
          "Empty set",
          "Power set"
        ],
        "correctAnswer": "Empty set",
        "explanation": "The complement of everything is nothing."
      },
      {
        "questionText": "If A is a subset of B and B is a subset of C, then A is a subset of?",
        "options": [
          "B only",
          "C only",
          "Both B and C",
          "Neither"
        ],
        "correctAnswer": "Both B and C",
        "explanation": "Transitive property of subsets."
      },
      {
        "questionText": "Which of the following is an empty set?",
        "options": [
          "{x : x is an even prime number > 2}",
          "{0}",
          "{x : x^2 = 4}",
          "{x : x < 5}"
        ],
        "correctAnswer": "{x : x is an even prime number > 2}",
        "explanation": "Only 2 is an even prime."
      },
      {
        "questionText": "Power set of an empty set has exactly how many elements?",
        "options": [
          "0",
          "1",
          "2",
          "Infinite"
        ],
        "correctAnswer": "1",
        "explanation": "The null set is a subset of the null set."
      },
      {
        "questionText": "De Morgan's law states that (A ∪ B)' = ?",
        "options": [
          "A' ∪ B'",
          "A' ∩ B'",
          "A ∩ B",
          "A ∪ B"
        ],
        "correctAnswer": "A' ∩ B'",
        "explanation": "Complement of union is intersection of complements."
      },
      {
        "questionText": "If n(A)=5, what is the number of relations on A?",
        "options": [
          "5",
          "25",
          "2^25",
          "2^5"
        ],
        "correctAnswer": "2^25",
        "explanation": "Relations on A is power set of AxA."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "(Advanced) If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∪ B?",
        "options": [
          "{1, 2, 3, 4}",
          "{2, 3}",
          "{1, 4}",
          "{1, 2, 3, 4, 5}"
        ],
        "correctAnswer": "{1, 2, 3, 4}",
        "explanation": "Detailed: The union involves all elements in A or B."
      },
      {
        "questionText": "(Advanced) If A = {a, b, c} and B = {b, c, d}, what is A ∩ B?",
        "options": [
          "{a, d}",
          "{b, c}",
          "{a, b, c, d}",
          "Empty set"
        ],
        "correctAnswer": "{b, c}",
        "explanation": "Detailed: The intersection contains common elements."
      },
      {
        "questionText": "(Advanced) What is the subset of universal set U={1,2,3,4} if A={1,2}?",
        "options": [
          "{1,2}",
          "{3,4}",
          "{1}",
          "{2}"
        ],
        "correctAnswer": "{1,2}",
        "explanation": "Detailed: A is itself a subset of U."
      },
      {
        "questionText": "(Advanced) If n(A) = 3 and n(B) = 4, what is the maximum number of elements in A ∪ B?",
        "options": [
          "3",
          "4",
          "7",
          "12"
        ],
        "correctAnswer": "7",
        "explanation": "Detailed: Max elements when disjoint."
      },
      {
        "questionText": "(Advanced) What is the complement of a universal set?",
        "options": [
          "Subset",
          "Superset",
          "Empty set",
          "Power set"
        ],
        "correctAnswer": "Empty set",
        "explanation": "Detailed: The complement of everything is nothing."
      },
      {
        "questionText": "(Advanced) If A is a subset of B and B is a subset of C, then A is a subset of?",
        "options": [
          "B only",
          "C only",
          "Both B and C",
          "Neither"
        ],
        "correctAnswer": "Both B and C",
        "explanation": "Detailed: Transitive property of subsets."
      },
      {
        "questionText": "(Advanced) Which of the following is an empty set?",
        "options": [
          "{x : x is an even prime number > 2}",
          "{0}",
          "{x : x^2 = 4}",
          "{x : x < 5}"
        ],
        "correctAnswer": "{x : x is an even prime number > 2}",
        "explanation": "Detailed: Only 2 is an even prime."
      },
      {
        "questionText": "(Advanced) Power set of an empty set has exactly how many elements?",
        "options": [
          "0",
          "1",
          "2",
          "Infinite"
        ],
        "correctAnswer": "1",
        "explanation": "Detailed: The null set is a subset of the null set."
      },
      {
        "questionText": "(Advanced) De Morgan's law states that (A ∪ B)' = ?",
        "options": [
          "A' ∪ B'",
          "A' ∩ B'",
          "A ∩ B",
          "A ∪ B"
        ],
        "correctAnswer": "A' ∩ B'",
        "explanation": "Detailed: Complement of union is intersection of complements."
      },
      {
        "questionText": "(Advanced) If n(A)=5, what is the number of relations on A?",
        "options": [
          "5",
          "25",
          "2^25",
          "2^5"
        ],
        "correctAnswer": "2^25",
        "explanation": "Detailed: Relations on A is power set of AxA."
      }
    ]
  },
  "Relations and Functions": {
    "taskQuestions": [
      {
        "questionText": "A relation R from set A to set B is a subset of?",
        "options": [
          "A ∪ B",
          "A ∩ B",
          "A × B",
          "B × A"
        ],
        "correctAnswer": "A × B",
        "explanation": "Relation is a subset of Cartesian product."
      },
      {
        "questionText": "If f(x) = x^2, what is the range if domain is Real numbers?",
        "options": [
          "All real numbers",
          "Positive real numbers and 0",
          "Negative real numbers",
          "Integers"
        ],
        "correctAnswer": "Positive real numbers and 0",
        "explanation": "Square of a real number is non-negative."
      },
      {
        "questionText": "For an onto function f: A → B, the range of f is equal to?",
        "options": [
          "A",
          "B",
          "Null set",
          "Subset of B"
        ],
        "correctAnswer": "B",
        "explanation": "Onto means codomain equals range."
      },
      {
        "questionText": "If f(x) = 2x + 3 and g(x) = x - 1, find f(g(x)).",
        "options": [
          "2x + 1",
          "2x + 2",
          "2x - 1",
          "2x + 5"
        ],
        "correctAnswer": "2x + 1",
        "explanation": "Substitute g(x) into f(x)."
      },
      {
        "questionText": "A function which is both one-one and onto is called?",
        "options": [
          "Injective",
          "Surjective",
          "Bijective",
          "Constant"
        ],
        "correctAnswer": "Bijective",
        "explanation": "Bijective means both injective and surjective."
      },
      {
        "questionText": "Let f(x) = |x|. This function is?",
        "options": [
          "One-one",
          "Onto",
          "Neither one-one nor onto",
          "Constant"
        ],
        "correctAnswer": "Neither one-one nor onto",
        "explanation": "Many inputs map to same output (e.g. 1 & -1)."
      },
      {
        "questionText": "Inverse of a function exists if and only if it is?",
        "options": [
          "One-one",
          "Onto",
          "Bijective",
          "Continuous"
        ],
        "correctAnswer": "Bijective",
        "explanation": "Must be bijective to have an inverse function."
      },
      {
        "questionText": "Relation 'is parallel to' in a set of lines is?",
        "options": [
          "Reflexive only",
          "Symmetric only",
          "Transitive only",
          "Equivalence"
        ],
        "correctAnswer": "Equivalence",
        "explanation": "It satisfies all three properties."
      },
      {
        "questionText": "Let f(x) = x^3. Then f(x) is an?",
        "options": [
          "Even function",
          "Odd function",
          "Periodic function",
          "Inverse function"
        ],
        "correctAnswer": "Odd function",
        "explanation": "f(-x) = -f(x)."
      },
      {
        "questionText": "Domain of f(x) = 1/√(x-2) is?",
        "options": [
          "x > 2",
          "x >= 2",
          "x < 2",
          "x <= 2"
        ],
        "correctAnswer": "x > 2",
        "explanation": "Denominator must be positive."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "(Advanced) A relation R from set A to set B is a subset of?",
        "options": [
          "A ∪ B",
          "A ∩ B",
          "A × B",
          "B × A"
        ],
        "correctAnswer": "A × B",
        "explanation": "Detailed: Relation is a subset of Cartesian product."
      },
      {
        "questionText": "(Advanced) If f(x) = x^2, what is the range if domain is Real numbers?",
        "options": [
          "All real numbers",
          "Positive real numbers and 0",
          "Negative real numbers",
          "Integers"
        ],
        "correctAnswer": "Positive real numbers and 0",
        "explanation": "Detailed: Square of a real number is non-negative."
      },
      {
        "questionText": "(Advanced) For an onto function f: A → B, the range of f is equal to?",
        "options": [
          "A",
          "B",
          "Null set",
          "Subset of B"
        ],
        "correctAnswer": "B",
        "explanation": "Detailed: Onto means codomain equals range."
      },
      {
        "questionText": "(Advanced) If f(x) = 2x + 3 and g(x) = x - 1, find f(g(x)).",
        "options": [
          "2x + 1",
          "2x + 2",
          "2x - 1",
          "2x + 5"
        ],
        "correctAnswer": "2x + 1",
        "explanation": "Detailed: Substitute g(x) into f(x)."
      },
      {
        "questionText": "(Advanced) A function which is both one-one and onto is called?",
        "options": [
          "Injective",
          "Surjective",
          "Bijective",
          "Constant"
        ],
        "correctAnswer": "Bijective",
        "explanation": "Detailed: Bijective means both injective and surjective."
      },
      {
        "questionText": "(Advanced) Let f(x) = |x|. This function is?",
        "options": [
          "One-one",
          "Onto",
          "Neither one-one nor onto",
          "Constant"
        ],
        "correctAnswer": "Neither one-one nor onto",
        "explanation": "Detailed: Many inputs map to same output (e.g. 1 & -1)."
      },
      {
        "questionText": "(Advanced) Inverse of a function exists if and only if it is?",
        "options": [
          "One-one",
          "Onto",
          "Bijective",
          "Continuous"
        ],
        "correctAnswer": "Bijective",
        "explanation": "Detailed: Must be bijective to have an inverse function."
      },
      {
        "questionText": "(Advanced) Relation 'is parallel to' in a set of lines is?",
        "options": [
          "Reflexive only",
          "Symmetric only",
          "Transitive only",
          "Equivalence"
        ],
        "correctAnswer": "Equivalence",
        "explanation": "Detailed: It satisfies all three properties."
      },
      {
        "questionText": "(Advanced) Let f(x) = x^3. Then f(x) is an?",
        "options": [
          "Even function",
          "Odd function",
          "Periodic function",
          "Inverse function"
        ],
        "correctAnswer": "Odd function",
        "explanation": "Detailed: f(-x) = -f(x)."
      },
      {
        "questionText": "(Advanced) Domain of f(x) = 1/√(x-2) is?",
        "options": [
          "x > 2",
          "x >= 2",
          "x < 2",
          "x <= 2"
        ],
        "correctAnswer": "x > 2",
        "explanation": "Detailed: Denominator must be positive."
      }
    ]
  },
  "Quadratic Equations": {
    "taskQuestions": [
      {
        "questionText": "Roots of the equation x^2 - 5x + 6 = 0 are?",
        "options": [
          "-2, -3",
          "2, 3",
          "1, 6",
          "1, 5"
        ],
        "correctAnswer": "2, 3",
        "explanation": "(x-2)(x-3) = 0."
      },
      {
        "questionText": "Sum of roots of ax^2 + bx + c = 0 is?",
        "options": [
          "c/a",
          "-b/a",
          "b/a",
          "-c/a"
        ],
        "correctAnswer": "-b/a",
        "explanation": "Standard property of quadratics."
      },
      {
        "questionText": "If roots of a quadratic are real and equal, the discriminant is?",
        "options": [
          "> 0",
          "< 0",
          "0",
          "1"
        ],
        "correctAnswer": "0",
        "explanation": "b^2 - 4ac = 0 for equal roots."
      },
      {
        "questionText": "Product of roots of 2x^2 - 3x + 4 = 0 is?",
        "options": [
          "-3/2",
          "3/2",
          "2",
          "-2"
        ],
        "correctAnswer": "2",
        "explanation": "Product is c/a = 4/2 = 2."
      },
      {
        "questionText": "A quadratic equation with rational coefficients has one root 2+√3, the other is?",
        "options": [
          "2-√3",
          "-2+√3",
          "-2-√3",
          "2+√3"
        ],
        "correctAnswer": "2-√3",
        "explanation": "Irrational roots occur in conjugate pairs."
      },
      {
        "questionText": "If alpha and beta are roots of x^2 - x - 1 = 0, find alpha + beta.",
        "options": [
          "-1",
          "0",
          "1",
          "2"
        ],
        "correctAnswer": "1",
        "explanation": "Sum is -(-1)/1 = 1."
      },
      {
        "questionText": "The max value of -x^2 + 4x - 3 occurs at x = ?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": "2",
        "explanation": "Vertex is at x = -b/2a = -4/-2 = 2."
      },
      {
        "questionText": "If roots of x^2 + kx + 4 = 0 are real, then k^2 must be?",
        "options": [
          ">= 16",
          "<= 16",
          "= 16",
          "> 8"
        ],
        "correctAnswer": ">= 16",
        "explanation": "Discriminant k^2 - 16 >= 0."
      },
      {
        "questionText": "If the roots of an equation are reciprocal, then?",
        "options": [
          "a=b",
          "b=c",
          "a=c",
          "a=b=c"
        ],
        "correctAnswer": "a=c",
        "explanation": "Product c/a = 1, so a=c."
      },
      {
        "questionText": "If sum of roots is 4 and product is 5, equation is?",
        "options": [
          "x^2+4x+5=0",
          "x^2-4x+5=0",
          "x^2-4x-5=0",
          "x^2+4x-5=0"
        ],
        "correctAnswer": "x^2-4x+5=0",
        "explanation": "x^2 - (sum)x + product = 0."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "(Advanced) Roots of the equation x^2 - 5x + 6 = 0 are?",
        "options": [
          "-2, -3",
          "2, 3",
          "1, 6",
          "1, 5"
        ],
        "correctAnswer": "2, 3",
        "explanation": "Detailed: (x-2)(x-3) = 0."
      },
      {
        "questionText": "(Advanced) Sum of roots of ax^2 + bx + c = 0 is?",
        "options": [
          "c/a",
          "-b/a",
          "b/a",
          "-c/a"
        ],
        "correctAnswer": "-b/a",
        "explanation": "Detailed: Standard property of quadratics."
      },
      {
        "questionText": "(Advanced) If roots of a quadratic are real and equal, the discriminant is?",
        "options": [
          "> 0",
          "< 0",
          "0",
          "1"
        ],
        "correctAnswer": "0",
        "explanation": "Detailed: b^2 - 4ac = 0 for equal roots."
      },
      {
        "questionText": "(Advanced) Product of roots of 2x^2 - 3x + 4 = 0 is?",
        "options": [
          "-3/2",
          "3/2",
          "2",
          "-2"
        ],
        "correctAnswer": "2",
        "explanation": "Detailed: Product is c/a = 4/2 = 2."
      },
      {
        "questionText": "(Advanced) A quadratic equation with rational coefficients has one root 2+√3, the other is?",
        "options": [
          "2-√3",
          "-2+√3",
          "-2-√3",
          "2+√3"
        ],
        "correctAnswer": "2-√3",
        "explanation": "Detailed: Irrational roots occur in conjugate pairs."
      },
      {
        "questionText": "(Advanced) If alpha and beta are roots of x^2 - x - 1 = 0, find alpha + beta.",
        "options": [
          "-1",
          "0",
          "1",
          "2"
        ],
        "correctAnswer": "1",
        "explanation": "Detailed: Sum is -(-1)/1 = 1."
      },
      {
        "questionText": "(Advanced) The max value of -x^2 + 4x - 3 occurs at x = ?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": "2",
        "explanation": "Detailed: Vertex is at x = -b/2a = -4/-2 = 2."
      },
      {
        "questionText": "(Advanced) If roots of x^2 + kx + 4 = 0 are real, then k^2 must be?",
        "options": [
          ">= 16",
          "<= 16",
          "= 16",
          "> 8"
        ],
        "correctAnswer": ">= 16",
        "explanation": "Detailed: Discriminant k^2 - 16 >= 0."
      },
      {
        "questionText": "(Advanced) If the roots of an equation are reciprocal, then?",
        "options": [
          "a=b",
          "b=c",
          "a=c",
          "a=b=c"
        ],
        "correctAnswer": "a=c",
        "explanation": "Detailed: Product c/a = 1, so a=c."
      },
      {
        "questionText": "(Advanced) If sum of roots is 4 and product is 5, equation is?",
        "options": [
          "x^2+4x+5=0",
          "x^2-4x+5=0",
          "x^2-4x-5=0",
          "x^2+4x-5=0"
        ],
        "correctAnswer": "x^2-4x+5=0",
        "explanation": "Detailed: x^2 - (sum)x + product = 0."
      }
    ]
  },
  "Sequences and Series": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      },
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      },
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      },
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      },
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      },
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      },
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      },
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      },
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      },
      {
        "questionText": "Calculate the primary characteristic value for Sequences and Series (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Sequences and Series."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      },
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      },
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      },
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      },
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      },
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      },
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      },
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      },
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      },
      {
        "questionText": "Evaluate the expression based on Sequences and Series properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Sequences and Series."
      }
    ]
  },
  "Permutations and Combinations": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      },
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      },
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      },
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      },
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      },
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      },
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      },
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      },
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      },
      {
        "questionText": "Calculate the primary characteristic value for Permutations and Combinations (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Permutations and Combinations."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      },
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      },
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      },
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      },
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      },
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      },
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      },
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      },
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      },
      {
        "questionText": "Evaluate the expression based on Permutations and Combinations properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Permutations and Combinations."
      }
    ]
  },
  "Binomial Theorem": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      },
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      },
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      },
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      },
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      },
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      },
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      },
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      },
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      },
      {
        "questionText": "Calculate the primary characteristic value for Binomial Theorem (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Binomial Theorem."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      },
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      },
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      },
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      },
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      },
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      },
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      },
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      },
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      },
      {
        "questionText": "Evaluate the expression based on Binomial Theorem properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Binomial Theorem."
      }
    ]
  },
  "Straight Lines": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      },
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      },
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      },
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      },
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      },
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      },
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      },
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      },
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      },
      {
        "questionText": "Calculate the primary characteristic value for Straight Lines (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Straight Lines."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      },
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      },
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      },
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      },
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      },
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      },
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      },
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      },
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      },
      {
        "questionText": "Evaluate the expression based on Straight Lines properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Straight Lines."
      }
    ]
  },
  "Circles": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Circles."
      },
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Circles."
      },
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Circles."
      },
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Circles."
      },
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Circles."
      },
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Circles."
      },
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Circles."
      },
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Circles."
      },
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Circles."
      },
      {
        "questionText": "Calculate the primary characteristic value for Circles (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Circles."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      },
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      },
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      },
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      },
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      },
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      },
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      },
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      },
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      },
      {
        "questionText": "Evaluate the expression based on Circles properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Circles."
      }
    ]
  },
  "Limits": {
    "taskQuestions": [
      {
        "questionText": "Limit of sin(x)/x as x approaches 0 is?",
        "options": [
          "0",
          "1",
          "Infinity",
          "Undefined"
        ],
        "correctAnswer": "1",
        "explanation": "Standard limit."
      },
      {
        "questionText": "Limit of (e^x - 1)/x as x approaches 0 is?",
        "options": [
          "0",
          "e",
          "1",
          "Infinity"
        ],
        "correctAnswer": "1",
        "explanation": "Standard limit property."
      },
      {
        "questionText": "Limit of (1+x)^(1/x) as x approaches 0 is?",
        "options": [
          "1",
          "0",
          "e",
          "Infinity"
        ],
        "correctAnswer": "e",
        "explanation": "Definition of Napier's constant e."
      },
      {
        "questionText": "If f(x) = (x^2-4)/(x-2), limit as x approaches 2 is?",
        "options": [
          "0",
          "2",
          "4",
          "Undefined"
        ],
        "correctAnswer": "4",
        "explanation": "Factor to x+2, then substitute 2 to get 4."
      },
      {
        "questionText": "Limit of 1/x as x approaches infinity is?",
        "options": [
          "0",
          "1",
          "Infinity",
          "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "As x grows, fraction shrinks to 0."
      },
      {
        "questionText": "L'Hopital's rule applies when the form is?",
        "options": [
          "1/0",
          "0/0",
          "0/1",
          "1/Infinity"
        ],
        "correctAnswer": "0/0",
        "explanation": "Applies to indeterminate forms 0/0 or Inf/Inf."
      },
      {
        "questionText": "Limit of tan(x)/x as x approaches 0 is?",
        "options": [
          "0",
          "1",
          "-1",
          "Infinity"
        ],
        "correctAnswer": "1",
        "explanation": "Standard trigonometric limit."
      },
      {
        "questionText": "Limit of a constant c as x approaches a is?",
        "options": [
          "c",
          "a",
          "0",
          "Infinity"
        ],
        "correctAnswer": "c",
        "explanation": "Constants do not change with x."
      },
      {
        "questionText": "Limit of (x^n - a^n)/(x - a) as x approaches a is?",
        "options": [
          "n a^(n-1)",
          "a^n",
          "n",
          "n*a"
        ],
        "correctAnswer": "n a^(n-1)",
        "explanation": "Formula for limit of polynomial."
      },
      {
        "questionText": "Left hand limit and Right hand limit must be equal for?",
        "options": [
          "Limit to exist",
          "Function to be positive",
          "Function to be increasing",
          "None of above"
        ],
        "correctAnswer": "Limit to exist",
        "explanation": "Basic condition for existence of limit."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "(Advanced) Limit of sin(x)/x as x approaches 0 is?",
        "options": [
          "0",
          "1",
          "Infinity",
          "Undefined"
        ],
        "correctAnswer": "1",
        "explanation": "Detailed: Standard limit."
      },
      {
        "questionText": "(Advanced) Limit of (e^x - 1)/x as x approaches 0 is?",
        "options": [
          "0",
          "e",
          "1",
          "Infinity"
        ],
        "correctAnswer": "1",
        "explanation": "Detailed: Standard limit property."
      },
      {
        "questionText": "(Advanced) Limit of (1+x)^(1/x) as x approaches 0 is?",
        "options": [
          "1",
          "0",
          "e",
          "Infinity"
        ],
        "correctAnswer": "e",
        "explanation": "Detailed: Definition of Napier's constant e."
      },
      {
        "questionText": "(Advanced) If f(x) = (x^2-4)/(x-2), limit as x approaches 2 is?",
        "options": [
          "0",
          "2",
          "4",
          "Undefined"
        ],
        "correctAnswer": "4",
        "explanation": "Detailed: Factor to x+2, then substitute 2 to get 4."
      },
      {
        "questionText": "(Advanced) Limit of 1/x as x approaches infinity is?",
        "options": [
          "0",
          "1",
          "Infinity",
          "Undefined"
        ],
        "correctAnswer": "0",
        "explanation": "Detailed: As x grows, fraction shrinks to 0."
      },
      {
        "questionText": "(Advanced) L'Hopital's rule applies when the form is?",
        "options": [
          "1/0",
          "0/0",
          "0/1",
          "1/Infinity"
        ],
        "correctAnswer": "0/0",
        "explanation": "Detailed: Applies to indeterminate forms 0/0 or Inf/Inf."
      },
      {
        "questionText": "(Advanced) Limit of tan(x)/x as x approaches 0 is?",
        "options": [
          "0",
          "1",
          "-1",
          "Infinity"
        ],
        "correctAnswer": "1",
        "explanation": "Detailed: Standard trigonometric limit."
      },
      {
        "questionText": "(Advanced) Limit of a constant c as x approaches a is?",
        "options": [
          "c",
          "a",
          "0",
          "Infinity"
        ],
        "correctAnswer": "c",
        "explanation": "Detailed: Constants do not change with x."
      },
      {
        "questionText": "(Advanced) Limit of (x^n - a^n)/(x - a) as x approaches a is?",
        "options": [
          "n a^(n-1)",
          "a^n",
          "n",
          "n*a"
        ],
        "correctAnswer": "n a^(n-1)",
        "explanation": "Detailed: Formula for limit of polynomial."
      },
      {
        "questionText": "(Advanced) Left hand limit and Right hand limit must be equal for?",
        "options": [
          "Limit to exist",
          "Function to be positive",
          "Function to be increasing",
          "None of above"
        ],
        "correctAnswer": "Limit to exist",
        "explanation": "Detailed: Basic condition for existence of limit."
      }
    ]
  },
  "Continuity and Differentiability": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Continuity and Differentiability (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Continuity and Differentiability."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      },
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      },
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      },
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      },
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      },
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      },
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      },
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      },
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      },
      {
        "questionText": "Evaluate the expression based on Continuity and Differentiability properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Continuity and Differentiability."
      }
    ]
  },
  "Application of Derivatives": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      },
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      },
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      },
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      },
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      },
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      },
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      },
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      },
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      },
      {
        "questionText": "Calculate the primary characteristic value for Application of Derivatives (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Application of Derivatives."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      },
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      },
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      },
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      },
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      },
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      },
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      },
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      },
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      },
      {
        "questionText": "Evaluate the expression based on Application of Derivatives properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Application of Derivatives."
      }
    ]
  },
  "Matrices": {
    "taskQuestions": [
      {
        "questionText": "If A is a 2x3 matrix and B is a 3x4 matrix, AB is?",
        "options": [
          "2x3",
          "3x4",
          "2x4",
          "Undefined"
        ],
        "correctAnswer": "2x4",
        "explanation": "Resulting dimensions are outer indices."
      },
      {
        "questionText": "A square matrix with 1s on diagonal and 0s elsewhere is?",
        "options": [
          "Null Matrix",
          "Identity Matrix",
          "Scalar Matrix",
          "Symmetric Matrix"
        ],
        "correctAnswer": "Identity Matrix",
        "explanation": "Definition of Identity Matrix."
      },
      {
        "questionText": "Matrix A is symmetric if?",
        "options": [
          "A = A^T",
          "A = -A^T",
          "A = I",
          "A = 0"
        ],
        "correctAnswer": "A = A^T",
        "explanation": "Transpose equals original matrix."
      },
      {
        "questionText": "If determinant of A is 0, A is called?",
        "options": [
          "Invertible",
          "Singular",
          "Non-singular",
          "Orthogonal"
        ],
        "correctAnswer": "Singular",
        "explanation": "Singular matrices have zero determinant."
      },
      {
        "questionText": "Inverse of AB is?",
        "options": [
          "A^(-1) B^(-1)",
          "B^(-1) A^(-1)",
          "A B",
          "B A"
        ],
        "correctAnswer": "B^(-1) A^(-1)",
        "explanation": "Reversal law for inverse."
      },
      {
        "questionText": "If A^2 = A, matrix A is called?",
        "options": [
          "Idempotent",
          "Involutory",
          "Nilpotent",
          "Orthogonal"
        ],
        "correctAnswer": "Idempotent",
        "explanation": "Definition of idempotent matrix."
      },
      {
        "questionText": "Transpose of a column matrix is?",
        "options": [
          "Column matrix",
          "Row matrix",
          "Square matrix",
          "Scalar matrix"
        ],
        "correctAnswer": "Row matrix",
        "explanation": "Columns become rows."
      },
      {
        "questionText": "Trace of a square matrix is?",
        "options": [
          "Product of diagonals",
          "Sum of diagonals",
          "Sum of elements",
          "Determinant"
        ],
        "correctAnswer": "Sum of diagonals",
        "explanation": "Trace is sum of principle diagonal elements."
      },
      {
        "questionText": "If matrix A is orthogonal, A^T is equal to?",
        "options": [
          "A",
          "-A",
          "A^(-1)",
          "I"
        ],
        "correctAnswer": "A^(-1)",
        "explanation": "Orthogonal means AA^T = I."
      },
      {
        "questionText": "Matrix addition is?",
        "options": [
          "Commutative",
          "Associative",
          "Both",
          "Neither"
        ],
        "correctAnswer": "Both",
        "explanation": "Addition is commutative and associative."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "(Advanced) If A is a 2x3 matrix and B is a 3x4 matrix, AB is?",
        "options": [
          "2x3",
          "3x4",
          "2x4",
          "Undefined"
        ],
        "correctAnswer": "2x4",
        "explanation": "Detailed: Resulting dimensions are outer indices."
      },
      {
        "questionText": "(Advanced) A square matrix with 1s on diagonal and 0s elsewhere is?",
        "options": [
          "Null Matrix",
          "Identity Matrix",
          "Scalar Matrix",
          "Symmetric Matrix"
        ],
        "correctAnswer": "Identity Matrix",
        "explanation": "Detailed: Definition of Identity Matrix."
      },
      {
        "questionText": "(Advanced) Matrix A is symmetric if?",
        "options": [
          "A = A^T",
          "A = -A^T",
          "A = I",
          "A = 0"
        ],
        "correctAnswer": "A = A^T",
        "explanation": "Detailed: Transpose equals original matrix."
      },
      {
        "questionText": "(Advanced) If determinant of A is 0, A is called?",
        "options": [
          "Invertible",
          "Singular",
          "Non-singular",
          "Orthogonal"
        ],
        "correctAnswer": "Singular",
        "explanation": "Detailed: Singular matrices have zero determinant."
      },
      {
        "questionText": "(Advanced) Inverse of AB is?",
        "options": [
          "A^(-1) B^(-1)",
          "B^(-1) A^(-1)",
          "A B",
          "B A"
        ],
        "correctAnswer": "B^(-1) A^(-1)",
        "explanation": "Detailed: Reversal law for inverse."
      },
      {
        "questionText": "(Advanced) If A^2 = A, matrix A is called?",
        "options": [
          "Idempotent",
          "Involutory",
          "Nilpotent",
          "Orthogonal"
        ],
        "correctAnswer": "Idempotent",
        "explanation": "Detailed: Definition of idempotent matrix."
      },
      {
        "questionText": "(Advanced) Transpose of a column matrix is?",
        "options": [
          "Column matrix",
          "Row matrix",
          "Square matrix",
          "Scalar matrix"
        ],
        "correctAnswer": "Row matrix",
        "explanation": "Detailed: Columns become rows."
      },
      {
        "questionText": "(Advanced) Trace of a square matrix is?",
        "options": [
          "Product of diagonals",
          "Sum of diagonals",
          "Sum of elements",
          "Determinant"
        ],
        "correctAnswer": "Sum of diagonals",
        "explanation": "Detailed: Trace is sum of principle diagonal elements."
      },
      {
        "questionText": "(Advanced) If matrix A is orthogonal, A^T is equal to?",
        "options": [
          "A",
          "-A",
          "A^(-1)",
          "I"
        ],
        "correctAnswer": "A^(-1)",
        "explanation": "Detailed: Orthogonal means AA^T = I."
      },
      {
        "questionText": "(Advanced) Matrix addition is?",
        "options": [
          "Commutative",
          "Associative",
          "Both",
          "Neither"
        ],
        "correctAnswer": "Both",
        "explanation": "Detailed: Addition is commutative and associative."
      }
    ]
  },
  "Determinants": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Determinants."
      },
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Determinants."
      },
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Determinants."
      },
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Determinants."
      },
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Determinants."
      },
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Determinants."
      },
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Determinants."
      },
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Determinants."
      },
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Determinants."
      },
      {
        "questionText": "Calculate the primary characteristic value for Determinants (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Determinants."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      },
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      },
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      },
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      },
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      },
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      },
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      },
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      },
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      },
      {
        "questionText": "Evaluate the expression based on Determinants properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Determinants."
      }
    ]
  },
  "Probability": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Probability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Probability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Probability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Probability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Probability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Probability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Probability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Probability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Probability."
      },
      {
        "questionText": "Calculate the primary characteristic value for Probability (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Probability."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      },
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      },
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      },
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      },
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      },
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      },
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      },
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      },
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      },
      {
        "questionText": "Evaluate the expression based on Probability properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Probability."
      }
    ]
  },
  "Statistics": {
    "taskQuestions": [
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 1).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Statistics."
      },
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 2).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Statistics."
      },
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 3).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Statistics."
      },
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 4).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Statistics."
      },
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 5).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Statistics."
      },
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 6).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Statistics."
      },
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 7).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Statistics."
      },
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 8).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Statistics."
      },
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 9).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "1",
        "explanation": "Derived from the fundamental theorem of Statistics."
      },
      {
        "questionText": "Calculate the primary characteristic value for Statistics (Setup 10).",
        "options": [
          "0",
          "1",
          "-1",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "Derived from the fundamental theorem of Statistics."
      }
    ],
    "mockQuestions": [
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 1.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      },
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 2.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      },
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 3.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      },
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 4.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      },
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 5.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      },
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 6.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      },
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 7.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      },
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 8.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      },
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 9.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      },
      {
        "questionText": "Evaluate the expression based on Statistics properties in scenario 10.",
        "options": [
          "Infinity",
          "0",
          "1",
          "e"
        ],
        "correctAnswer": "1",
        "explanation": "Standard convergence behavior in Statistics."
      }
    ]
  }
};

module.exports = questionBank;