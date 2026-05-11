# Pricing Data Assumptions

## Overview

The MVP uses simplified rule-based pricing assumptions to generate AI subscription optimization recommendations.

The pricing data is intended for demonstration and educational purposes rather than exact enterprise billing calculations.

---

# Supported AI Tools

Current supported tools:
- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini

---

# Example Pricing Assumptions

## ChatGPT

### ChatGPT Plus
- estimated monthly cost: $20

### ChatGPT Team
- estimated higher operational cost for multi-seat usage

Optimization logic:
- small teams may benefit from lower-tier plans

---

## Cursor

### Cursor Pro
- estimated monthly cost: $20

### Cursor Business
- assumed higher operational cost for larger teams

Optimization logic:
- smaller teams may not require enterprise plans

---

## Claude

### Claude Pro
- estimated monthly cost: $30

Optimization logic:
- premium tiers may not always justify usage patterns

---

## GitHub Copilot

### Individual Plan
- estimated monthly cost: $10

Optimization logic:
- individual plans may reduce unnecessary seat costs

---

## Gemini

### Gemini Pro
- estimated monthly cost: $15

Optimization logic:
- lightweight usage may not require higher-tier plans

---

# Savings Calculation Logic

Savings estimates are calculated using:
- current reported spend
- estimated alternative pricing tiers
- seat assumptions
- simplified optimization rules

Annual savings are estimated using:

Annual Savings = Monthly Savings × 12

---

# Limitations

Current pricing logic:
- is static
- does not use live APIs
- does not reflect enterprise negotiation pricing
- does not account for regional billing differences

---

# Future Improvements

Potential future improvements:
- real-time pricing APIs
- usage-based recommendations
- enterprise billing support
- historical spend analytics
- AI-powered pricing optimization