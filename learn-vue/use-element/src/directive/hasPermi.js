/**
 * 操作权限处理
 */

export default {
    inserted(el, binding, vnode) {
        console.log('vnode', vnode)
        const { value } = binding
        const all_permission = "*:*:*";
        const permissions = ['supervision:admin', 'pm:supervision:list']

        if (value && value instanceof Array && value.length > 0) {
            const permissionFlag = value

            const hasPermissions = permissions.some(permission => {
                return all_permission === permission || permissionFlag.includes(permission)
            })

            // 无论是使用 removeChild 还是 display: 'none' 都会影响到原来的元素
            if (!hasPermissions) {
                // el.parentNode && el.parentNode.removeChild(el)
                el.style.display = 'none'
            } else {
                el.style.display = ''
            }
        } else {
            throw new Error(`请设置操作权限标签值`)
        }
    }
}
