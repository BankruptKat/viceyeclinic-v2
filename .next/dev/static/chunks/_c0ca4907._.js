(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ConditionDetailPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConditionDetailPanel",
    ()=>ConditionDetailPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ConditionDetailPanel({ isOpen, onClose, title, shortDescription, sections }) {
    _s();
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleEscape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConditionDetailPanel.useCallback[handleEscape]": (e)=>{
            if (e.key === "Escape") onClose();
        }
    }["ConditionDetailPanel.useCallback[handleEscape]"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConditionDetailPanel.useEffect": ()=>{
            if (isOpen) {
                document.addEventListener("keydown", handleEscape);
                document.body.style.overflow = "hidden";
            }
            return ({
                "ConditionDetailPanel.useEffect": ()=>{
                    document.removeEventListener("keydown", handleEscape);
                    document.body.style.overflow = "";
                }
            })["ConditionDetailPanel.useEffect"];
        }
    }["ConditionDetailPanel.useEffect"], [
        isOpen,
        handleEscape
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConditionDetailPanel.useEffect": ()=>{
            if (isOpen && panelRef.current) {
                panelRef.current.focus();
            }
        }
    }["ConditionDetailPanel.useEffect"], [
        isOpen
    ]);
    const panel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm",
                    onClick: onClose,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                    ref: panelRef,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": `${title} details`,
                    tabIndex: -1,
                    initial: {
                        y: "100%",
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: "100%",
                        opacity: 0
                    },
                    transition: {
                        type: "spring",
                        damping: 30,
                        stiffness: 300
                    },
                    className: " fixed z-[101] inset-x-3 bottom-3 top-auto max-h-[85vh] md:inset-x-auto md:bottom-3 md:right-3 md:top-3 md:max-h-none md:w-full md:max-w-md overflow-y-auto rounded-3xl glass-panel shadow-[0_24px_50px_rgba(0,0,0,0.2)] ",
                    style: {
                        paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full flex-col gap-4 p-5 md:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.16em] text-blue-400 font-medium",
                                                children: "Eye Condition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-2 text-xl md:text-2xl font-semibold text-foreground leading-snug",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        "aria-label": "Close panel",
                                        className: "glass-pill rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-foreground transition-colors cursor-pointer shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[15px] leading-relaxed text-muted",
                                children: shortDescription
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            sections.map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] uppercase tracking-[0.14em] text-muted/65 mb-2 font-medium",
                                            children: section.heading
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[15px] leading-relaxed text-muted",
                                            children: section.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 shrink-0 rounded-2xl glass-pill p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] uppercase tracking-[0.14em] text-muted/65 font-medium",
                                        children: "Need More Information?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[15px] leading-relaxed text-muted",
                                        children: "Book a consultation with our ophthalmologists for a personalized assessment and treatment plan."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ConditionDetailPanel.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/ConditionDetailPanel.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(panel, document.body);
}
_s(ConditionDetailPanel, "zgUgP9rhbyiDp2H0zJrmkg3HmF8=");
_c = ConditionDetailPanel;
var _c;
__turbopack_context__.k.register(_c, "ConditionDetailPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ConditionCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConditionCard",
    ()=>ConditionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConditionDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConditionDetailPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ConditionCard({ condition, index = 0 }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    delay: index * 0.08
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setIsOpen(true),
                    "aria-expanded": isOpen,
                    className: "glass-panel p-5 sm:p-8 rounded-3xl block w-full text-left hover:bg-foreground/5 transition-colors duration-300 group cursor-pointer min-h-[48px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-medium text-base sm:text-lg text-foreground leading-snug pr-2",
                                    children: condition.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ConditionCard.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16,
                                    className: "text-muted group-hover:text-foreground transition-colors shrink-0 mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ConditionCard.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ConditionCard.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted text-sm sm:text-[15px] leading-relaxed",
                            children: condition.shortDescription
                        }, void 0, false, {
                            fileName: "[project]/src/components/ConditionCard.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ConditionCard.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ConditionCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConditionDetailPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConditionDetailPanel"], {
                isOpen: isOpen,
                onClose: ()=>setIsOpen(false),
                title: condition.title,
                shortDescription: condition.shortDescription,
                sections: condition.sections
            }, void 0, false, {
                fileName: "[project]/src/components/ConditionCard.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ConditionCard, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = ConditionCard;
var _c;
__turbopack_context__.k.register(_c, "ConditionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/conditions.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"slug\":\"cataract\",\"title\":\"Cataract\",\"shortDescription\":\"A clouding of the natural lens of the eye that causes reduced vision.\",\"icon\":\"eye\",\"sections\":[{\"heading\":\"What is a Cataract?\",\"content\":\"A cataract is a clouding of the natural lens of the eye. The natural lens is a fine, transparent object suspended behind the pupil, black circular opening of the eye, and is normally clear. When light enters the eye it passes through the pupil and the lens. The lens focuses the light rays onto the retina at the back of the eye which in turn sends a message to the brain. However, when cataracts develop, the light is distorted and cannot focus clearly on the retina causing reduced vision.\"},{\"heading\":\"What Causes a Cataract?\",\"content\":\"Almost everyone who lives a long life will develop cataracts. The most common cause of a cataract is natural age-related changes, however other causes are trauma, inflammation, radiation damage, metabolic and nutritional defects, or birth defects.\"},{\"heading\":\"What are the Symptoms of Cataract?\",\"content\":\"Some common symptoms of a developing cataract are: objects appear yellowed, haziness, appearance of dark spots or shadows, increased need for more light to see clearly, halos or coloured rings around lights, increased nearsightedness, and double vision.\"},{\"heading\":\"How Fast Does a Cataract Progress?\",\"content\":\"This varies from person to person. Some cataracts may develop slowly over the years while others may progress rapidly within a few months. A cataract does not spread from one eye to another but will usually develop in both eyes at some time.\"}]},{\"slug\":\"glaucoma\",\"title\":\"Glaucoma\",\"shortDescription\":\"A group of eye diseases that damage the optic nerve, often linked to elevated eye pressure.\",\"icon\":\"activity\",\"sections\":[{\"heading\":\"What is Glaucoma?\",\"content\":\"Glaucoma is a group of eye diseases that gradually cause damage to the optic nerve. It is often associated with elevated intraocular pressure.  Early detection and treatment are critical to prevent vision loss.\"},{\"heading\":\"Monitoring and Diagnosis\",\"content\":\"Each of these evaluation tools is an important way to monitor your vision to help ensure that glaucoma does not rob you of your sight. Some of these tests will not be necessary for everyone. Your ophthalmologist or optometrist will discuss which tests are best for you. Some tests may need to be repeated on a regular basis to monitor any changes in your vision caused by glaucoma.\"}]},{\"slug\":\"macular-degeneration\",\"title\":\"Macular Degeneration\",\"shortDescription\":\"Age-related deterioration of the macula causing loss of central vision.\",\"icon\":\"scan\",\"sections\":[{\"heading\":\"What is Macular Degeneration?\",\"content\":\"Macular degeneration, also known as Age Related Macular Degeneration (AMD) is the loss of the central field of vision, or what you see directly in front of you. This is caused by deterioration of the macula, a sensitive part of the retina which is made up of millions of light sensing cells which gather the images. When the macula is damaged, the central vision becomes unclear, blurry or fuzzy.\"},{\"heading\":\"Types of AMD\",\"content\":\"The two types of Macular Degeneration are: Dry AMD and Wet AMD. Dry macular degeneration is the more common form and less severe of the two types. In dry macular degeneration, the retinal cells in the macula begin to degenerate or break down resulting in the thinning of the macula. Progression of this type is slow and may take years to become severe. Some symptoms of dry macular degeneration are fuzzy central vision, need for more light to read, poor contrast, distorted images and development of a blind spot in the centre of vision. Wet macular degeneration is characterized by the abnormal growth of blood vessels under the retina at the back of the eye. These blood vessels are very porous, leaking blood and fluid under the macula. Symptoms are the same as dry macular degeneration however, the onset is rapid.\"},{\"heading\":\"Causes of Macular Degeneration\",\"content\":\"The exact reason for macular degeneration is not known, however the risk of the disease increases with age and is most often found in people over 65. Other factors that can cause macular degeneration are: race (Caucasians are more prone to this disease), family history, an unhealthy diet and smoking. Cardiovascular disease and high cholesterol levels both increase the risk of macular degeneration.\"}]},{\"slug\":\"dry-eye\",\"title\":\"Dry Eye & Lid Margin Disease\",\"shortDescription\":\"Chronic inflammation of the eyelids causing burning, dryness, and irritation.\",\"icon\":\"droplets\",\"sections\":[{\"heading\":\"What is Lid Margin Disease?\",\"content\":\"Lid margin disease or blepharitis is a common and frequently chronic, ongoing inflammation of the eyelids. The hallmark symptoms are burning, especially in the morning; thick, red eyelids; eyelids matted together in the morning and red eyes. This condition frequently occurs in people who tend to have oily skin, dandruff, rosacea or dry eyes.\"},{\"heading\":\"Causes\",\"content\":\"Blepharitis runs in families. It is sometimes caused by Staph or by other microbes and may be related to some skin conditions, like rosacea. The oil glands in the eyelids are abnormal and become plugged and produce an abnormal type of oil. The tears become acidic, and the tear film can break down quickly, causing dryness and burning.\"},{\"heading\":\"Treatment\",\"content\":\"Lid margin and Dry Eye cannot be cured. It may be controlled with a few simple, daily hygienic measures. Once or twice per day, place a warm, wet washcloth over your closed eyelids for a couple minutes. Rewet it as it cools. With a wet Q-tip, gently scrub the base of the lashes for about 15 seconds per lid. Medications alone are not sufficient – the application of warmth and cleansing of the lashes daily is key. New methods of treatment include micro-blepharoexfoliation (BlephX), Meibomian gland heating and expression (Mibo) as well as Intense Pulsed Light (IPL).\"}]},{\"slug\":\"chalazion\",\"title\":\"Chalazion\",\"shortDescription\":\"A swelling or lump in the eyelid caused by a blocked oil gland.\",\"icon\":\"circle-dot\",\"sections\":[{\"heading\":\"What is a Chalazion?\",\"content\":\"A chalazion is a swelling or lump in the eyelid, caused by inflammation of one of the small oil-producing glands located in the upper and lower eyelids. When a chalazion is of sudden onset and acutely inflamed, it is called a stye. Sometimes a chalazion can cause the entire eyelid to swell suddenly, but usually there is a particular tender point.\"},{\"heading\":\"Treatment\",\"content\":\"When a chalazion is small and without symptoms, it may disappear on its own. If the chalazion is large, it may cause blurred vision by pressing on the cornea. Chalazions are treated with warm compresses, steroid injections to reduce inflammation, surgery to drain large chalazions, or newer treatments such as Intense Pulsed Light (IPL). Chalazions usually respond well to treatment, although some people are prone to recurrences.\"}]},{\"slug\":\"epiretinal-membrane\",\"title\":\"Epiretinal Membrane\",\"shortDescription\":\"Scar tissue on the macula that causes blurred or distorted central vision.\",\"icon\":\"layers\",\"sections\":[{\"heading\":\"What is an Epiretinal Membrane?\",\"content\":\"The retina is a layer of light-sensing cells lining the back of your eye. The macula is the small area at the center of your retina that allows you to see fine details. As you age, the clear gel-like substance that fills the middle of your eye begins to shrink and pull away from the retina. In some cases, a thin scar tissue or membrane can grow on the surface of the macula. When wrinkles, creases, or bulges form on the macula due to this scar tissue, this is known as an epiretinal membrane.\"},{\"heading\":\"Symptoms\",\"content\":\"Symptoms, which can be mild or severe and affect one or both eyes, may include: blurred detail vision, distorted or wavy vision, gray or cloudy area in central vision, blind spot in central vision, and double vision in the affected eye.\"},{\"heading\":\"Treatment\",\"content\":\"If your symptoms are mild, no treatment may be necessary. Updating your eyeglass prescription or wearing bifocals may improve your vision sufficiently. If you have more severe symptoms, your ophthalmologist may recommend vitrectomy surgery to peel and remove the abnormal scar tissue. During this outpatient procedure, tiny instruments are used to remove the wrinkled tissue. Vision often improves.\"}]},{\"slug\":\"floaters-and-flashers\",\"title\":\"Floaters & Flashers\",\"shortDescription\":\"Small specks or threads in your vision, sometimes accompanied by flashes of light.\",\"icon\":\"sparkles\",\"sections\":[{\"heading\":\"What are Floaters?\",\"content\":\"Small specks, threads or clouds moving in your vision are known as floaters. In most cases, floaters are part of the natural aging process. As we get older, the vitreous (the clear, gel-like substance that fills the inside of the eye) tends to shrink and detach from the retina, forming clumps within the eye. What you see are the shadows these clumps cast on the retina.\"},{\"heading\":\"What are Flashers?\",\"content\":\"The appearance of flashing lights comes from the traction of the vitreous gel on the retina at the time of vitreous separation. Flashes look like lightning streaks.\"},{\"heading\":\"When to Seek Help\",\"content\":\"Floaters and flashes are sometimes associated with retinal tears. When the vitreous shrinks, it can pull on the retina and cause a tear. A torn retina is a serious problem that can lead to a retinal detachment and blindness. If new floaters appear suddenly or you see sudden flashes of light, see your eye doctor promptly.\"}]},{\"slug\":\"macular-hole\",\"title\":\"Macular Hole\",\"shortDescription\":\"A small round opening in the macula causing a blind spot in central vision.\",\"icon\":\"target\",\"sections\":[{\"heading\":\"What is a Macular Hole?\",\"content\":\"The macula is the part of the retina responsible for acute central vision. A macular hole is a small, round opening in the macula. The hole causes a blind spot or blurred area directly in the center of your vision. Most macular holes occur in the elderly.\"},{\"heading\":\"Treatment\",\"content\":\"Macular holes that are just starting to form may be simply observed. Fifty percent of these holes resolve spontaneously. Holes that are more than minimal usually should have surgery to prevent severe vision loss. Vitrectomy surgery removes the vitreous gel and scar tissue, and the eye is filled with a special gas bubble to push against the macula and close the hole. The patient must maintain a face-down position for one to two weeks.\"}]},{\"slug\":\"corneal-abrasion\",\"title\":\"Corneal Abrasion\",\"shortDescription\":\"Scratches or cuts to the clear outer surface of the eye.\",\"icon\":\"shield-alert\",\"sections\":[{\"heading\":\"What is a Corneal Abrasion?\",\"content\":\"The cornea is the clear dome in the front of the eye covering the iris and pupil. Injuries to the epithelium, such as scratches, cuts, or scrapes, are known as corneal abrasions. Usually caused by fingernail scratches, makeup brushes, plants, or rubbing of the eyes.\"},{\"heading\":\"Symptoms and Treatment\",\"content\":\"Symptoms include pain, foreign body sensation, tearing, redness and blurred vision. Treatment includes antibiotic drops or ointment to prevent infection. Minor abrasions usually heal within a day or two, while larger abrasions take about a week. Corneal abrasions can recur spontaneously, even months later.\"}]},{\"slug\":\"corneal-ulcers\",\"title\":\"Corneal Ulcers\",\"shortDescription\":\"Open sores on the cornea, often caused by infection or contact lens wear.\",\"icon\":\"alert-circle\",\"sections\":[{\"heading\":\"What are Corneal Ulcers?\",\"content\":\"Corneal ulcers can form due to trauma to the cornea, eyelid disease, severe dry eye, fungus, Herpes simplex viral infections, and other causes. The most common cause is from contact lens wear. Bacterial ulcers are the most painful type and can cause permanent vision loss if untreated.\"},{\"heading\":\"Symptoms\",\"content\":\"The symptoms of corneal ulcers may include: pain, redness, blurred vision, tearing, and sensitivity to light. Report a painful, red eye to your doctor promptly!\"},{\"heading\":\"Treatment\",\"content\":\"Treatment depends on the cause and usually includes steroid eye drops, anti-inflammatory drops, or antibiotics. Often the antibiotic drops must be compounded in a special pharmacy. In some cases, drops must be administered every hour around the clock. In rare cases, a corneal transplant may be necessary.\"}]},{\"slug\":\"detached-retina\",\"title\":\"Detached & Torn Retina\",\"shortDescription\":\"A serious condition where the retina separates from the back of the eye.\",\"icon\":\"alert-triangle\",\"sections\":[{\"heading\":\"What is a Retinal Detachment?\",\"content\":\"A retinal detachment is a very serious problem that usually causes blindness unless treated. The appearance of flashing lights, floating objects, or a gray curtain moving across the field of vision are all indications of a possible retinal detachment. If any of these occur, see an ophthalmologist right away.\"},{\"heading\":\"Treatment\",\"content\":\"Laser surgery or cryotherapy (freezing) are often used to seal retinal tears and prevent detachment. If the retina is detached, there are three surgical repair options: Pneumatic retinopexy (gas bubble injection), scleral buckle procedure, or vitrectomy surgery. These procedures are done in an operating room under sterile conditions.\"}]}]"));}),
"[project]/src/app/conditions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConditionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConditionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConditionCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$conditions$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/content/conditions.json (json)");
"use client";
;
;
;
;
function ConditionsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-24 md:pt-32 pb-16 md:pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-400 font-medium tracking-wide text-sm mb-2 block",
                                children: "Expertise"
                            }, void 0, false, {
                                fileName: "[project]/src/app/conditions/page.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-5xl font-semibold text-foreground mb-3 md:mb-4 tracking-tight",
                                children: "Conditions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/conditions/page.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted max-w-lg mx-auto text-[15px] md:text-base",
                                children: "Learn about common eye conditions we diagnose and treat."
                            }, void 0, false, {
                                fileName: "[project]/src/app/conditions/page.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/conditions/page.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$conditions$2e$json__$28$json$29$__["default"].map((condition, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConditionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConditionCard"], {
                                condition: condition,
                                index: i
                            }, condition.slug, false, {
                                fileName: "[project]/src/app/conditions/page.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/conditions/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/conditions/page.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/conditions/page.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/conditions/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ConditionsPage;
var _c;
__turbopack_context__.k.register(_c, "ConditionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_c0ca4907._.js.map