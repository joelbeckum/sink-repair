import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = '<ul>'

    const listItems = requests.map(request => {
                        return `<li>
                            ${request.description}
                            <button class="request__delete"
                                    id="request--${request.id}">
                                Delete
                            </button>
                        </li>`
                    })

    html += listItems.join("")
    html += '</ul>'                

    return html
}