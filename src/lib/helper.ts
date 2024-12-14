import { AttributeProductType, AttributeVariantType } from '@/schemas/product';
import { nanoid } from 'nanoid';
export type CombinationItem = {
    id: string;
    attributes: AttributeVariantType[];
};

export function generateProductVariant(
    data: AttributeProductType[],
    current: AttributeVariantType[] = [],
    index: number = 0,
    result: CombinationItem[] = []
): CombinationItem[] {
    if (data.length === 0) {
        return [];
    }
    if (index === data.length) {
        result.push({
            id: nanoid(5),
            attributes: [...current]
        });
        return result;
    }
    for (let i = 0; i < data[index].values.length; i++) {
        if (!data[index].name || !data[index].values[i].name) {
            continue;
        }
        current[index] = {
            id: data[index].id,
            name: data[index].name,
            value: data[index].values[i]
        };
        generateProductVariant(data, current, index + 1, result);
    }
    return result;
}

export function updateCombinations(
    existingItems: CombinationItem[],
    attributes: AttributeProductType[]
): CombinationItem[] {
    const results: CombinationItem[] = [];
    // Hàm tạo tổ hợp mới từ dữ liệu thuộc tính
    function generateCombinations(attributes: AttributeProductType[]): CombinationItem['attributes'][] {
        const combinations: CombinationItem['attributes'][] = [];
        function combine(current: CombinationItem['attributes'], index: number) {
            if (current.length > 0) {
                const attributesCombination = current
                    .map((attr) => {
                        if (!attr.value || !attr.name || !attr.id) {
                            return null;
                        }
                        return {
                            id: attr.id,
                            name: attr.name,
                            value: attr.value
                        };
                    })
                    .filter((attr) => attr !== null);
                if (attributesCombination.length > 0) combinations.push(attributesCombination);
            }
            for (let i = index; i < attributes.length; i++) {
                const attr = attributes[i];
                attr.values.forEach((value) => {
                    combine([...current, { ...attr, value }], i + 1);
                });
            }
        }
        combine([], 0);
        return combinations;
    }
    // Sinh tổ hợp mới
    const newCombinations = generateCombinations(attributes);

    // So sánh và giữ ID cũ nếu tổ hợp tồn tại
    newCombinations.forEach((newCombo) => {
        // Tìm xem tổ hợp này có trong danh sách cũ không
        const existing = existingItems.find((item) => JSON.stringify(item.attributes) === JSON.stringify(newCombo));
        if (existing) {
            // Nếu tồn tại, giữ nguyên ID cũ
            results.push(existing);
        } else {
            // Nếu không tồn tại, tạo ID mới
            results.push({
                id: '1' + nanoid(5),
                attributes: newCombo
            });
        }
    });
    return results;
}
