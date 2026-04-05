// ============================================================
// Shared data for "заказ посетителя.html" and
//                   "просмотр заказа вид для посетителя.html"
// ============================================================

// ===== DEMO MENU (для подстановки в заказ) =====
const MENU = {
  1:  { name:"Суп куриный с лапшой", kcal:245, cat:"Супы" },
  2:  { name:"Борщ говяжий со сметаной", kcal:280, cat:"Супы" },
  3:  { name:"Салат «Овощной» (огурец, томат, зелень)", kcal:120, cat:"Салаты" },
  4:  { name:"Салат «Цезарь» с курицей", kcal:210, cat:"Салаты" },
  5:  { name:"Куриное филе на гриле", kcal:310, cat:"Горячее" },
  6:  { name:"Котлета из индейки", kcal:270, cat:"Горячее" },
  7:  { name:"Гречка с овощами", kcal:210, cat:"Гарниры" },
  8:  { name:"Рис отварной", kcal:180, cat:"Гарниры" },
  9:  { name:"Компот из сухофруктов", kcal:95, cat:"Напитки" },
  10: { name:"Чай чёрный", kcal:0, cat:"Напитки" },
};

// Лимиты на категории блюд в одном заказе
const LIMITS = [
  { label:"Супы", max:1 },
  { label:"Горячее", max:2 },
  { label:"Гарниры", max:1 },
  { label:"Салаты", max:1 },
];

// Слоты питания
const SLOTS = [
  { id:1, name:"Завтрак", start:"08:30", end:"10:30" },
  { id:2, name:"Обед", start:"12:30", end:"17:00" }
];

// ===== УТИЛИТЫ =====
function pad2(n){ return String(n).padStart(2,"0"); }

function fmtDateRu(d){
  return `${pad2(d.getDate())}.${pad2(d.getMonth()+1)}.${d.getFullYear()}`;
}

function escapeHtml(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

const $ = id => document.getElementById(id);
