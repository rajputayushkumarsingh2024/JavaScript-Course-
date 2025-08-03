/*
### **4. File Path Builder**

🧠 **Task:**
Create a function that constructs a file path from folder and filename:
👉 *"C:/Users/Ayush/Documents/file.txt"*


*/

function filePath(user, folder, fileName) {
  return `C:/Users/${user}/${folder}/${fileName}`;
}