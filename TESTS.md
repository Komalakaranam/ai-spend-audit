# Prompt Engineering Documentation

## Audit Summary Prompt

The following prompt structure was used to guide AI-style audit summary generation logic.

---

## Base Prompt

"Analyze the following AI tool subscriptions and identify potential optimization opportunities. Generate a concise professional summary explaining how the user may reduce monthly AI operational costs."

---

## Input Variables

The audit engine considers:
- tool name
- subscription plan
- monthly spend
- number of seats
- team size
- primary use case

---

## Example Input

Tools:
- ChatGPT Team
- Cursor Business
- Claude Max

Monthly spend:
- $120
- $200
- $150

Team size:
- 10

Primary use case:
- Coding and research

---

## Example Output

"Your current AI stack contains several optimization opportunities. Consolidating overlapping subscriptions and selecting more cost-efficient plans may significantly reduce operational AI expenses while maintaining productivity."

---

# Prompt Design Goals

The prompts were designed to:
- remain concise
- sound professional
- avoid exaggerated savings claims
- provide startup-friendly recommendations
- improve readability for non-technical users

---

# Future Improvements

Potential future enhancements:
- OpenAI API integration
- personalized recommendations
- usage-based optimization
- historical spend trend analysis
- multi-model recommendation logic