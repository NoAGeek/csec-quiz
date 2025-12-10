// CSEC Quiz Fragen - WS 2019/2020
// Format: { question: "...", answers: [...], correct: [indices der richtigen Antworten] }

const quizQuestions = [
    {
        question: "1. What are privilege escalation attack vectors?",
        answers: [
            "Valid accounts",
            "Accessibility features",
            "New shell window",
            "Bypass user account control"
        ],
        correct: [0, 1, 3] // Valid accounts, Accessibility features, Bypass UAC
    },
    {
        question: "2. Check the correct usages of hash functions",
        answers: [
            "Encrypted data exchange",
            "Digital signature",
            "Virus detection",
            "Intrusion detection"
        ],
        correct: [1, 2, 3] // Digital signature, Virus detection, Intrusion detection (NOT encrypted data exchange)
    },
    {
        question: "3. Check the correct security mechanisms",
        answers: [
            "Routing control",
            "Data confidentiality",
            "Data integrity",
            "Virtualization",
            "Digital signature"
        ],
        correct: [0, 1, 2, 4] // Routing control, Data confidentiality, Data integrity, Digital signature (NOT Virtualization)
    },
    {
        question: "4. What are persistence attack vectors?",
        answers: [
            "Data encryption",
            "Component Firmware",
            "Create account",
            "Startup items"
        ],
        correct: [1, 2, 3] // Component Firmware, Create account, Startup items (NOT Data encryption)
    },
    {
        question: "5. Check potential attacks against RSA",
        answers: [
            "Mathematical attacks",
            "Timing attacks",
            "Reverse engineering",
            "Network sniffing",
            "Brute force"
        ],
        correct: [0, 1, 4] // Mathematical attacks, Timing attacks, Brute force
    },
    {
        question: "6. Check potential means of authentication",
        answers: [
            "Something I know",
            "Something I am",
            "Something I see",
            "Something I do",
            "Something I possess"
        ],
        correct: [0, 1, 3, 4] // Something I know, am, do, possess (NOT "Something I see")
    },
    {
        question: "7. Check countermeasures against SQL injection attacks",
        answers: [
            "Validate input",
            "Change database server",
            "Limit privileges",
            "Encrypt data",
            "Train employees"
        ],
        correct: [0, 2, 3] // Validate input, Limit privileges, Encrypt data
    },
    {
        question: "8. Check types of malicious software",
        answers: [
            "Adware",
            "Hydra",
            "ABD",
            "Logic bomb",
            "Worm",
            "Spartan"
        ],
        correct: [0, 3, 4] // Adware, Logic bomb, Worm (NOT Hydra, ABD, Spartan - these are tools/not malware types)
    },
    {
        question: "9. Check the correct HR procedures during the hiring process",
        answers: [
            "Perform background checks",
            "Principle of least privilege",
            "Special investigation for sensitive positions",
            "Employment agreements",
            "Revoke physical and digital access"
        ],
        correct: [0, 2, 3] // Background checks, Special investigation, Employment agreements
    },
    {
        question: "10. Check the correct security procedures for visitors in low security environments",
        answers: [
            "Privacy shield on screens",
            "Collect smartphones and USB sticks",
            "Single point of visitor registration",
            "Non-disclosure agreement",
            "Visitor's pass"
        ],
        correct: [0, 2, 4] // Privacy shield, Single point registration, Visitor's pass
    },
    {
        question: "11. Check the correct locations of a honeypot",
        answers: [
            "On the internet",
            "Outside the external firewall",
            "Inside the service network",
            "On the proxy server",
            "Inside the internal network",
            "In the cloud"
        ],
        correct: [1, 2, 4] // Outside external firewall, Inside service network, Inside internal network
    },
    {
        question: "12. Check the correct security-specific metrics of CObIT",
        answers: [
            "Number of security policies defined in the organizational guidelines",
            "Number of security solutions deviating from the enterprise architecture",
            "Number of security services with confirmed alignment to the security plan",
            "Number of security-related incidents"
        ],
        correct: [1, 2, 3] // All except first one
    },
    {
        question: "13. Check the actions during the post-attack phase of penetration testing",
        answers: [
            "Remove tools and exploits",
            "Sign non-disclosure agreement",
            "Remove logs",
            "Define security policy",
            "Reverse changes and manipulations"
        ],
        correct: [0, 2, 4] // Remove tools, Remove logs, Reverse changes
    },
    {
        question: "14. Check the activities that differentiate Advanced Persistent Threats (APTs) from commodity threats and hacktivism",
        answers: [
            "Research target infrastructure",
            "Build or acquire tools",
            "Expand access and obtain credentials",
            "Find and organize accomplices",
            "Strengthen foothold"
        ],
        correct: [0, 2, 4] // Research target, Expand access, Strengthen foothold
    },
    {
        question: "15. Check useful events for security auditing",
        answers: [
            "Prevention of policy checks",
            "Security-related actions by users",
            "Application errors",
            "Data import/export",
            "Deleted objects",
            "Memory usage"
        ],
        correct: [0, 1, 2, 3, 4, 5] // All are useful for security auditing
    },
    {
        question: "16. Check the tasks of a blue team in penetration testing",
        answers: [
            "Offensive security",
            "Ethical hacking",
            "Damage control",
            "Digital Forensics",
            "Black box testing"
        ],
        correct: [2, 3] // Damage control, Digital Forensics (Blue team is defensive)
    },
    {
        question: "17. Check the types of contextual data within the architecture of a security incident and event management system (SIEM)",
        answers: [
            "User information",
            "Asset information",
            "Operating systems",
            "Threat intelligence",
            "Applications"
        ],
        correct: [0, 2, 3] // User information, Operating systems, Threat intelligence
    }
];
