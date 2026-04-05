// Общие данные и функции для модуля "Заявка на закупку"
// Этот файл не использует ES модули, а просто определяет глобальные переменные
// для совместимости с file:// протоколом

// Демо-данные (идентичны в обеих формах)
const purchaseRequestData = {
  id: "PR-202604-01",
  periodStart: "2026-04-01",
  periodEnd: "2026-04-30",
  createdAt: new Date().toLocaleString("ru-RU"),
  rows: [
    { id: "L-001", itemName: "Молоко пастеризованное", uom: "л", qty: 120, comment: "" },
    { id: "L-002", itemName: "Куриное филе", uom: "кг", qty: 85, comment: "" },
    { id: "L-003", itemName: "Рис", uom: "кг", qty: 60, comment: "Проверить остатки перед заказом" },
    { id: "L-004", itemName: "Огурцы свежие", uom: "кг", qty: 0, comment: "" },
    { id: "L-005", itemName: "Соль", uom: "кг", qty: 5, comment: "" }
  ]
};

// Общие вспомогательные функции
function fmtQty(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "";
  return n.toLocaleString("ru-RU", { maximumFractionDigits: 3 });
}

function parseQty(v) {
  const s = String(v ?? "").trim().replace(/\s/g, "").replace(",", ".");
  if (s === "") return NaN;
  const n = Number(s);
  return n;
}

function rowIssueLevel(r) {
  // Контроль "аномалий": ноль/отрицательное количество, пустая номенклатура, слишком большое значение.
  const qty = Number(r.qty);
  if (!r.itemName) return "bad";
  if (!Number.isFinite(qty)) return "bad";
  if (qty < 0) return "bad";
  if (qty === 0) return "warn";
  if (qty > 10000) return "warn";
  return "ok";
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Экспортируем в глобальную область видимости
window.purchaseRequestData = purchaseRequestData;
window.fmtQty = fmtQty;
window.parseQty = parseQty;
window.rowIssueLevel = rowIssueLevel;
window.escapeHtml = escapeHtml;
