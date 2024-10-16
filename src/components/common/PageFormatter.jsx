import PropTypes from "prop-types"

export default function PageFormatter({ children }) {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  )
}

PageFormatter.propTypes = {
  children: PropTypes.node.isRequired
}
