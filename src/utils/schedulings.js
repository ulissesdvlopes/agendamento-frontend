export const SERVICE_TYPES = [
    {value: 'alignment', label: 'Alinhamento'},
    {value: 'inspection', label: 'Revisão'},
]

export function getServiceName(serviceType) {
    return SERVICE_TYPES.find(item => item.value === serviceType).label;
}