# 🚀 Playwright SDET Notes

## 📅 Session 1 - API Basics

### ✅ What I Learned

- `test()` → Defines a Playwright test.
- `expect()` → Used for assertions and validations.
- `request.newContext()` → Creates an API client.
- `baseURL` → Avoids repeating the full URL and makes tests easier to maintain.
- `api.get()` → Sends a GET request.
- `response.json()` → Parses the response body into a JavaScript object.
- `response.status()` → Returns the HTTP status code.

---

## 🧠 Key Takeaways

- **Parsing ≠ Validation**
  - `await response.json()` only reads the JSON.
  - `expect(...)` is what actually validates the response.

- **Why use `baseURL`?**
  - Cleaner code
  - Easier to switch environments
  - Less duplication

---

## 💼 Interview Notes

**Q: What does `request.newContext()` do?**  
Creates an isolated API client with its own configuration (base URL, headers, auth, etc.).

**Q: Does `response.json()` validate the response?**  
No. It only converts the JSON into a JavaScript object.

---

## 📈 Progress

- ✅ Installed Playwright
- ✅ Created GitHub portfolio
- ✅ Wrote first API test
- ✅ Learned `request.newContext()`
- ✅ Learned `baseURL`
- ✅ Learned `response.json()`
- ✅ Learned `response.status()`

---

## ⏭️ Next Session

- Validate response body
- POST requests
- API chaining