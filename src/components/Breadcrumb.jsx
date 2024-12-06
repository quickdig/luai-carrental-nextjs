import Link from "next/link"

const Breadcrumb = ({ breadcrumbs }) => {

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                {breadcrumbs.map((crumb, index) => (
                    <li
                        key={crumb.href}
                        className="breadcrumb-item"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        {index !== breadcrumbs.length - 1 ? (
                            <>
                                <Link href={crumb.href}>
                                    {crumb.name}
                                </Link>
                                <span style={{ margin: '0 8px' }}>→</span>
                            </>
                        ) : (
                            <span style={{ fontWeight: 'bold', color: 'gray' }}>{crumb.name}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumb