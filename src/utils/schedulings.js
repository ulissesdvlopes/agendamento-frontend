export function getServiceName(serviceType) {
    switch (serviceType) {
        case 'alignment':
            return 'Alinhamento';
        case 'inspection':
            return 'Revisão';
        default:
            return '';
    }
}