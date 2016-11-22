package br.gov.sp.fatec.egammer.domain.venda;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PedidoRepository extends CrudRepository<Pedido, Long> {
	
	public Pedido findByCodigo(final Long codigo);
	
	@Query("select p from Pedido p where p.usuario.codigo = ?1")
	public List<Pedido> buscaTodosPedidosCliente(final Long cliente) ;

}
