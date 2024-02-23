export interface Category {
    category: string;
    categoryCode: string;
    color: string;
    id: number;
    midCategory: string;
    visible: boolean;
}

export function classifyByCategoryCode(data: any[]) {
    const C001 = data.filter(item => item.categoryCode === 'C001');
    const C002 = data.filter(item => item.categoryCode === 'C002');
    const C003 = data.filter(item => item.categoryCode === 'C003');
    const C004 = data.filter(item => item.categoryCode === 'C004');
    const C005 = data.filter(item => item.categoryCode === 'C005');
    const C006 = data.filter(item => item.categoryCode === 'C006');
    return [C001, C002, C003, C004, C005, C006];
}