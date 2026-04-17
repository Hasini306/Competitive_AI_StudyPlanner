const topicMaterials = {
  "Sets": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Sets",
    content: {
      theory: [
        "A set is a well-defined collection of distinct objects.",
        "Sets can be represented in roster (tabular) form and set-builder form.",
        "An empty set (null set) has no elements and is denoted by ∅ or {}.",
        "A finite set has a countable number of elements; an infinite set does not.",
        "The universal set (U) is a set containing all possible elements under consideration."
      ],
      formulas: [
        "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
        "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(A ∩ C) + n(A ∩ B ∩ C)",
        "(A ∪ B)' = A' ∩ B' (De Morgan's First Law)",
        "(A ∩ B)' = A' ∪ B' (De Morgan's Second Law)"
      ],
      keyConcepts: [
        "Subset: Set A is a subset of B if all elements of A are in B.",
        "Proper Subset: A is a proper subset of B if A ⊂ B and A ≠ B.",
        "Union (∪): A set containing all elements of A, B, or both.",
        "Intersection (∩): A set containing elements common to both A and B.",
        "Complement (A'): Elements in the universal set that are not in A."
      ],
      importantNotes: [
        "Every set is a subset of itself.",
        "The empty set ∅ is a subset of every set.",
        "If a set has n elements, its power set has 2^n elements."
      ],
      shortcuts: [
        "Use Venn diagrams to quickly visualize relationships and avoid double-counting overlapping sets."
      ],
      examples: [
        "Example: If U = {1,2,3,4,5}, A = {1,2,3}, B = {3,4}, then A ∪ B = {1,2,3,4} and A ∩ B = {3}.",
        "The complement of A, A' = {4,5}."
      ]
    }
  },
  "Relations and Functions": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Relations and Functions",
    content: {
      theory: [
        "An ordered pair consists of two elements in a specific order: (a, b).",
        "A cartesian product A × B is the set of all ordered pairs (a,b) where a ∈ A and b ∈ B.",
        "A relation from A to B is any subset of A × B.",
        "A function is a special relation where every element in set A has a unique image in set B."
      ],
      formulas: [
        "Number of relations from set A (m elements) to B (n elements) = 2^(m*n)",
        "Composition: (f o g)(x) = f(g(x))",
        "If f(x) = y, then its inverse f^-1(y) = x"
      ],
      keyConcepts: [
        "Domain: The set of all possible input values.",
        "Codomain: The set of all possible output destinations.",
        "Range: The set of actual output values (Range ⊆ Codomain).",
        "One-One (Injective): Every element in domain maps to a unique element in codomain.",
        "Onto (Surjective): Every element in codomain is mapped to by at least one element.",
        "Bijection: A function that is both one-one and onto."
      ],
      importantNotes: [
        "A function has an inverse if and only if it is a bijection.",
        "Composition of functions is generally not commutative: f(g(x)) ≠ g(f(x)).",
        "Always ensure denominator is non-zero and square roots are non-negative when finding domain."
      ],
      shortcuts: [
        "Horizontal Line Test: If any horizontal line intersects the graph more than once, the function is not one-one."
      ],
      examples: [
        "Let f(x) = 2x + 3. To find inverse, set y = 2x + 3 => 2x = y - 3 => x = (y - 3) / 2. Thus f^-1(x) = (x - 3) / 2."
      ]
    }
  },
  "Quadratic Equations": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Quadratic Equations",
    content: {
      theory: [
        "A polynomial equation of the second degree: ax^2 + bx + c = 0, where a ≠ 0.",
        "The solutions or roots are the values of x that make the equation true.",
        "The determinant (D = b^2 - 4ac) governs the nature of the roots."
      ],
      formulas: [
        "Quadratic Formula: x = [-b ± √(b^2 - 4ac)] / 2a",
        "Sum of roots (α + β) = -b/a",
        "Product of roots (αβ) = c/a",
        "Discriminant (D) = b^2 - 4ac"
      ],
      keyConcepts: [
        "If D > 0: roots are real and distinct.",
        "If D = 0: roots are real and equal.",
        "If D < 0: roots are complex/imaginary conjugate pairs.",
        "Relation between roots and coefficients allows forming equations given roots: x^2 - (sum)x + (product) = 0."
      ],
      importantNotes: [
        "If rational coefficients form a quadratic and one root is p+√q, the other is p-√q.",
        "The minimum or maximum value of ax^2 + bx + c occurs at x = -b/2a.",
        "Condition for common roots between equations is heavily tested."
      ],
      shortcuts: [
        "To quickly find sum and product, just sign-flip the middle term coefficient and divide by the leading coefficient."
      ],
      examples: [
        "For x^2 - 5x + 6 = 0, Sum = 5, Product = 6. Roots are 2 and 3."
      ]
    }
  },
  "Matrices": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Matrices",
    content: {
      theory: [
        "A matrix is an ordered rectangular array of numbers or functions.",
        "Order of a matrix is written as m x n (rows by columns).",
        "Matrix multiplication requires the number of columns in the first matrix to equal rows in the second."
      ],
      formulas: [
        "(AB)^T = B^T A^T (Reversal law for transpose)",
        "A A^-1 = A^-1 A = I",
        "A^-1 = 1/|A| * Adj(A)",
        "Trace(A) = sum of main diagonal elements"
      ],
      keyConcepts: [
        "Square Matrix: rows = columns.",
        "Diagonal Matrix: all non-diagonal elements are 0.",
        "Identity Matrix (I): Square matrix with 1s on diagonal, 0s elsewhere.",
        "Symmetric: A = A^T",
        "Skew-Symmetric: A = -A^T"
      ],
      importantNotes: [
        "Matrix multiplication is NOT commutative: AB ≠ BA generally.",
        "An inverse only exists if the matrix is non-singular (Determinant ≠ 0).",
        "Every square matrix can be expressed as a sum of symmetric and skew-symmetric matrices."
      ],
      shortcuts: [
        "For a 2x2 matrix [a b; c d], the inverse is 1/(ad - bc) * [d -b; -c a]."
      ],
      examples: [
        "To add matrices A and B, they must have the exact same dimensions. Add matching elements directly."
      ]
    }
  },
  "Determinants": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Determinants",
    content: {
      theory: [
        "Every square matrix has an associated number called its determinant, denoted by |A| or det(A).",
        "It provides critical scale factors in transformations and is used to solve linear systems (Cramer's Rule)."
      ],
      formulas: [
        "|AB| = |A| * |B|",
        "|A^T| = |A|",
        "|kA| = k^n * |A| (where n is the order of square matrix A)",
        "Adj(A) * A = A * Adj(A) = |A|I",
        "|A^-1| = 1 / |A|"
      ],
      keyConcepts: [
        "Singular Matrix: A matrix whose determinant is 0.",
        "Cramer's Rule: Solves equations using det substitution.",
        "Area of a triangle can be calculated quickly using coordinates inside a 3x3 determinant."
      ],
      importantNotes: [
        "If any two rows (or columns) are identical, the determinant evaluates to 0.",
        "Interchanging two adjacent rows negates the determinant.",
        "Adding a scalar multiple of one row to another does NOT change the determinant value."
      ],
      shortcuts: [
        "For a 3x3 determinant evaluation, use Sarrus' Rule (diagonals multiplication) for faster manual calculation."
      ],
      examples: [
        "For matrix [2 4; 3 1], Det = (2*1) - (4*3) = 2 - 12 = -10."
      ]
    }
  },
  "Limits": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Limits",
    content: {
      theory: [
        "A limit is the value that a function approaches as the input approaches some value.",
        "It is the foundation of calculus, enabling the definition of derivatives and continuity.",
        "We distinguish between Left Hand Limit (LHL) and Right Hand Limit (RHL)."
      ],
      formulas: [
        "lim(x->0) (sin x) / x = 1",
        "lim(x->0) (e^x - 1) / x = 1",
        "lim(x->0) ln(1+x) / x = 1",
        "lim(x->a) [x^n - a^n] / (x - a) = n * a^(n-1)",
        "lim(x->0) (a^x - 1) / x = ln a"
      ],
      keyConcepts: [
        "Existence of Limit: A limit exists if and only if LHL = RHL = finite value.",
        "Indeterminate Forms: 0/0, ∞/∞, 0*∞, ∞-∞, 1^∞, 0^0, ∞^0.",
        "L'Hopital's Rule: Used to solve 0/0 or ∞/∞ indeterminate limits."
      ],
      importantNotes: [
        "Always substitute the limit value first. If it yields a regular number, that is the answer.",
        "For limits involving infinity, dividing by the highest power of x present in the denominator often resolves indeterminate states."
      ],
      shortcuts: [
        "Use Taylor/Maclaurin series expansions for limits involving sine, cosine, e^x, and ln(x) for complex 0/0 forms."
      ],
      examples: [
        "Solve lim(x->2) (x^2 - 4)/(x - 2). It's 0/0. Factor top: (x-2)(x+2)/(x-2) = x+2. Substitute x=2, result is 4."
      ]
    }
  },
  "Continuity and Differentiability": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Continuity and Differentiability",
    content: {
      theory: [
        "A function is continuous at x=a if its curve has no breaks, jumps, or holes.",
        "A function is differentiable at x=a if the curve is smooth at that point (no sharp corners).",
        "Differentiability implies continuity, but continuity does NOT imply differentiability."
      ],
      formulas: [
        "Continuity condition: lim(x->a^-) f(x) = lim(x->a^+) f(x) = f(a)",
        "Right Hand Derivative (RHD): lim(h->0^+) [f(a+h) - f(a)] / h",
        "Left Hand Derivative (LHD): lim(h->0^-) [f(a+h) - f(a)] / h"
      ],
      keyConcepts: [
        "Continuous Function: Polynomials, sin, cos, and exponentials are continuous in their natural domains.",
        "Sharp Corner: Absolute value function |x| is continuous at 0 but NOT differentiable there.",
        "Rolle's Theorem: If f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), there exists c in (a,b) where f'(c)=0.",
        "Mean Value Theorem (MVT): f'(c) = [f(b) - f(a)] / (b - a)."
      ],
      importantNotes: [
        "Greatest integer function [x] is discontinuous at all integer points.",
        "At a point of discontinuity, a function cannot be differentiable."
      ],
      shortcuts: [
        "If differentiating piecewise functions, you can generally just differentiate both pieces and plug in x=a to check if LHD=RHD faster."
      ],
      examples: [
        "Check f(x)=|x| at x=0. Continuous? Yes, LHL=0, RHL=0, f(0)=0. Differentiable? No, LHD=-1, RHD=1."
      ]
    }
  },
  "Probability": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Probability",
    content: {
      theory: [
        "Probability quantifies the likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain).",
        "A sample space (S) contains all possible outcomes.",
        "An Event (E) is any subset of the sample space."
      ],
      formulas: [
        "P(E) = n(E) / n(S)",
        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        "Conditional Probability: P(A|B) = P(A ∩ B) / P(B)",
        "Baye's Theorem: P(E_i|A) = [P(E_i)P(A|E_i)] / sum[P(E_k)P(A|E_k)]",
        "Binomial Distribution: P(X=r) = ^nC_r * p^r * q^(n-r)"
      ],
      keyConcepts: [
        "Mutually Exclusive Events: A ∩ B = ∅ => P(A ∪ B) = P(A) + P(B).",
        "Independent Events: Occurrence of one doesn't affect the other. P(A ∩ B) = P(A) * P(B).",
        "Random Variable: A rule assigning a real number to each outcome.",
        "Mean (Expected Value) = Σ (x_i * P_i)."
      ],
      importantNotes: [
        "The sum of probabilities of all elementary events equals 1.",
        "Always distinguish between 'with replacement' (independent events) and 'without replacement' (conditional events)."
      ],
      shortcuts: [
        "For questions resolving 'at least 1 success', calculate 1 - P(none)."
      ],
      examples: [
        "Toss 2 coins. S = {HH, HT, TH, TT}. P(exactly one Head) = 2/4 = 1/2."
      ]
    }
  },
  "Straight Lines": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Straight Lines",
    content: {
      theory: [
        "A straight line represents the shortest distance between two points.",
        "It can be represented algebraically in multiple geometrical formats.",
        "The slope (m) indicates the steepness and direction of the line."
      ],
      formulas: [
        "Distance between 2 points: √[(x2 - x1)^2 + (y2 - y1)^2]",
        "Slope (m) = tan θ = (y2 - y1) / (x2 - x1)",
        "Point-Slope Form: y - y1 = m(x - x1)",
        "Slope-Intercept Form: y = mx + c",
        "Perpendicular distance from (x1, y1) to Ax + By + C = 0: d = |Ax1 + By1 + C| / √(A^2 + B^2)",
        "Angle between lines: tan φ = |(m1 - m2) / (1 + m1*m2)|"
      ],
      keyConcepts: [
        "Parallel Lines: have equal slopes (m1 = m2).",
        "Perpendicular Lines: product of slopes is -1 (m1*m2 = -1).",
        "Centroid of Triangle: ((x1+x2+x3)/3, (y1+y2+y3)/3).",
        "Collinear Points: Area of the triangle formed by them must be 0."
      ],
      importantNotes: [
        "For distance between parallel lines Ax+By+C1=0 and Ax+By+C2=0: d = |C1 - C2| / √(A^2 + B^2).",
        "Ensure equations are aligned properly in general form before directly substituting."
      ],
      shortcuts: [
        "To find a parallel line equation to Ax+By+C=0, purely use Ax+By+K=0 and sub the point to find K."
      ],
      examples: [
        "Line through (1,2) with slope 3: y - 2 = 3(x - 1) => y = 3x - 1."
      ]
    }
  },
  "Circles": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Circles",
    content: {
      theory: [
        "A circle is the locus of all points in a plane equidistant from a fixed point (the center).",
        "The constant distance is the radius.",
        "A tangent touches the circle at exactly one point globally."
      ],
      formulas: [
        "Standard Form: (x - h)^2 + (y - k)^2 = r^2 (Center (h,k), radius r)",
        "General equation: x^2 + y^2 + 2gx + 2fy + c = 0",
        "Center from general: (-g, -f)",
        "Radius from general: √(g^2 + f^2 - c)",
        "Length of tangent from point (x1, y1): √(x1^2 + y1^2 + 2gx1 + 2fy1 + c)"
      ],
      keyConcepts: [
        "Condition of tangency: Perpendicular distance from center to line must equal the radius.",
        "Orthogonal Circles: Intersect at right angles if 2g1g2 + 2f1f2 = c1 + c2.",
        "Director Circle: Locus of intersections of perpendicular tangents."
      ],
      importantNotes: [
        "For general equation to represent a real circle, g^2 + f^2 - c >= 0.",
        "Coefficient of x^2 must equal coefficient of y^2, and there should be no xy term."
      ],
      shortcuts: [
        "To find the equation of a chord with given middle point (x1,y1), use T = S1."
      ],
      examples: [
        "x^2 + y^2 = 25 is a circle centered at origin (0,0) with radius 5."
      ]
    }
  },
  "Binomial Theorem": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    content: {
      theory: [
        "The binomial theorem provides a formula for the expansion of a binomial (x + y)^n for any positive integer n.",
        "The coefficients follow Pascal's Triangle and combinatorics (^nC_r)."
      ],
      formulas: [
        "(x + y)^n = ^nC_0 x^n + ^nC_1 x^{n-1} y^1 + ... + ^nC_n y^n",
        "General Term: T_{r+1} = ^nC_r * x^{n-r} * y^r",
        "^nC_r = n! / [r!(n-r)!]",
        "Sum of binomial coefficients: ^nC_0 + ^nC_1 + ... + ^nC_n = 2^n"
      ],
      keyConcepts: [
        "Number of terms in the expansion of (x+y)^n is n+1.",
        "Middle term depends on n. If n is even, it's the (n/2 + 1)th term. If odd, there are two middle terms.",
        "Coefficient of any term equidistant from the beginning and end are equal: ^nC_r = ^nC_{n-r}."
      ],
      importantNotes: [
        "For questions asking for 'term independent of x', set the overall exponent of x in T_{r+1} strictly to 0 and solve for r.",
        "Take care of negative signs inside the binomial: (x - y)^n alternates signs."
      ],
      shortcuts: [
        "Sum of odd positioned coefficients = sum of even positioned coefficients = 2^(n-1)."
      ],
      examples: [
        "In (x + 1)^3, T_2 = ^3C_1 * x^{3-1} * 1^1 = 3x^2."
      ]
    }
  },
  "Sequences and Series": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Sequences and Series",
    content: {
      theory: [
        "A sequence is an ordered list of numbers following a rule.",
        "A series is the summation of the terms in a sequence.",
        "Common models are Arithmetic Progression (AP), Geometric Progression (GP), and Harmonic Progression (HP)."
      ],
      formulas: [
        "AP nth term: t_n = a + (n-1)d",
        "AP Sum: S_n = n/2 [2a + (n-1)d]  or  n/2 (a + l)",
        "GP nth term: t_n = a * r^(n-1)",
        "GP Sum: S_n = a(r^n - 1)/(r - 1) for r > 1",
        "Infinite GP Sum: S_∞ = a / (1 - r) for |r| < 1",
        "HP nth term: The reciprocal sequence forms an AP."
      ],
      keyConcepts: [
        "Arithmetic Mean (AM) between a and b: (a+b)/2",
        "Geometric Mean (GM) between a and b: √(ab)",
        "Harmonic Mean (HM) between a and b: 2ab/(a+b)",
        "AM >= GM >= HM property is critical for solving maximum/minimum value algebra."
      ],
      importantNotes: [
        "If picking 3 terms in AP, pick: a-d, a, a+d. (Sum cancels d).",
        "If picking 3 terms in GP, pick: a/r, a, a*r. (Product cancels r).",
        "Arithmetico-Geometric Progression (AGP) multiplies corresponding AP and GP terms together."
      ],
      shortcuts: [
        "For AGP sums, multiply the series by the common ratio r, shift right, and subtract from the original series."
      ],
      examples: [
        "For AP 2, 5, 8... a=2, d=3. 10th term = 2 + (10-1)3 = 29."
      ]
    }
  },
  "Permutations and Combinations": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    content: {
      theory: [
        "Permutation relates to the arrangement of objects (order matters).",
        "Combination relates to the selection of objects (order does NOT matter).",
        "Fundamental Principle of Counting: If event A occurs m ways and event B occurs n ways sequentially, total = m*n."
      ],
      formulas: [
        "^nP_r = n! / (n-r)!",
        "^nC_r = n! / [r! * (n-r)!]",
        "^nP_r = ^nC_r * r!",
        "Circular permutations of n distinct objects = (n-1)!",
        "Arranging n objects with p alike things = n! / p!"
      ],
      keyConcepts: [
        "Selection of one or more objects from n identical objects = n items.",
        "Selection of one or more objects from n distinct objects = 2^n - 1.",
        "Derangements: Number of ways n things can be placed such that none goes to its original spot."
      ],
      importantNotes: [
        "Be careful with Circular Permutation symmetry (necklaces/garlands): divide by 2 yielding (n-1)!/2.",
        "The word 'AND' multiplies cases, 'OR' adds cases."
      ],
      shortcuts: [
        "Total number of rectangles on a standard m x n grid is ^(m+1)C_2 * ^(n+1)C_2."
      ],
      examples: [
        "Choosing 2 people from 5: ^5C_2 = 10. Arranging 2 people from 5 in seats: ^5P_2 = 20."
      ]
    }
  },
  "Application of Derivatives": {
    examType: "JEE",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    content: {
      theory: [
        "Derivatives determine rate of change implicitly and directly.",
        "Applications include curve sketching, finding tangent lines, and evaluating optimization (maxima/minima)."
      ],
      formulas: [
        "Slope of tangent at point P: dy/dx | P",
        "Equation of tangent at (x1, y1): y - y1 = (dy/dx)(x - x1)",
        "Equation of normal at (x1, y1): y - y1 = (-1 / (dy/dx))(x - x1)",
        "Rate of change: dx/dt, dy/dt."
      ],
      keyConcepts: [
        "Increasing Function: f'(x) > 0 for all x in interval.",
        "Decreasing Function: f'(x) < 0 for all x in interval.",
        "Local Maximum: f'(c) = 0 and f''(c) < 0.",
        "Local Minimum: f'(c) = 0 and f''(c) > 0.",
        "Point of Inflection: Where concavity changes sign."
      ],
      importantNotes: [
        "When finding maxima in a closed interval [a,b], you MUST also evaluate f(a) and f(b) beside critical points.",
        "Two curves intersect orthogonally if the product of their tangent slopes dy/dx equals -1."
      ],
      shortcuts: [
        "If searching for absolute geometrical maximas (largest cylinder in a sphere, etc.), memorize the standard parametric answers natively."
      ],
      examples: [
        "Find minimum of y = x^2 - 4x. y' = 2x - 4. Set to 0 => x = 2. y'' = 2 (positive). Thus, minimum at x=2."
      ]
    }
  }
};

module.exports = topicMaterials;