import React from 'react'
import './icon.scss'

type Props = {
  className?: string | 'action'
  actionHref: string | 'img'
  actionTheme: string | 'img'
  actionSize: string | 'false'
  actionHorizontal: string
  actionIcon?: string
  actionText: string
}

const ActionIcon = ({ className, actionHref, actionTheme, actionSize, actionHorizontal, actionIcon, actionText}: Props) => (
    //   <svg className={className} role={role} focusable={focusable}>
    //     {title && <title>{title}</title>}
    //     <use xlinkHref={`#${id}`} />
    //   </svg>

    // Nunjuck
    // <a href='{{ action.href }}' class='action {{ action.theme }} {{ action.size }} {% if action.horizontal %}action--horizontal{% endif %}{% if action.horizontal %} action--bold{% endif %}'>
    //     <div class="action__icon ">
    //         <i class="i {{ action.icon }}"></i>
    //     </div>
    //     <span> 
    //         {{ action.text }}
    //     </span>
    // </a>

    <Link
        to={actionHref}
        className={className}
        activeClassName={CLASSNAME_ACTIVE}
        getProps={({ isPartiallyCurrent }) => {
          return isPartiallyCurrent
            ? { className: `${CLASSNAME} ${CLASSNAME_ACTIVE}` }
            : null
        }}
      >
        <div class="action__icon">
            <i class="i {{ action.icon }}"></i>
        </div>
        <span>{actionText}</span>
      </Link>
)

ActionIcon.defaultProps = {
  focusable: 'false',
};

export default ActionIcon

// {% for action in item.action %}
// <a href='{{ action.href }}' class='action {{ action.theme }} {{ action.size }} {% if action.horizontal %}action--horizontal{% endif %}{% if action.horizontal %} action--bold{% endif %}'>
//     <div class="action__icon ">

//         <i class="i {{ action.icon }}"></i>

//     </div>

//     <span> 
//         {{ action.text }}
//     </span>

// </a>

// {% endfor %}